import Fastify from 'fastify';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const app = Fastify({ logger: true });
const google = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const sessions = new Map<string,{userId:string,seed:number,startedAt:number,hash:number,objects:Set<string>}>();
const users = new Map<string,{id:string,email:string,name?:string}>();
const wallets = new Map<string,{hash:number,bp:number,xp:number}>();

app.get('/health', async () => ({ ok: true, service: 'burger-miner-api' }));

app.post('/auth/google', async (req, reply) => {
  const { credential } = z.object({credential:z.string().min(20)}).parse(req.body);
  const ticket = await google.verifyIdToken({idToken:credential,audience:process.env.GOOGLE_CLIENT_ID});
  const p = ticket.getPayload(); if (!p?.sub || !p.email) return reply.code(401).send({error:'INVALID_GOOGLE_TOKEN'});
  const user = users.get(p.sub) ?? {id:p.sub,email:p.email,name:p.name}; users.set(p.sub,user);
  wallets.set(user.id, wallets.get(user.id) ?? {hash:0,bp:0,xp:0});
  const token = jwt.sign({sub:user.id}, process.env.JWT_SECRET ?? 'dev-secret', {expiresIn:'15m'});
  return { token, user };
});

app.post('/game/sessions', async () => {
  const id = crypto.randomUUID(); const seed = Math.floor(Math.random()*1_000_000_000);
  sessions.set(id,{userId:'demo-user',seed,startedAt:Date.now(),hash:0,objects:new Set()});
  return {sessionId:id,seed,expiresAt:Date.now()+10*60_000};
});

app.post('/game/sessions/:id/events', async (req, reply) => {
  const s = sessions.get((req.params as any).id); if (!s) return reply.code(404).send({error:'SESSION_NOT_FOUND'});
  const body = z.object({events:z.array(z.object({type:z.literal('COLLECT'),objectId:z.string(),value:z.number().int().min(1).max(100)})).max(100)}).parse(req.body);
  for (const e of body.events) { if (s.objects.has(e.objectId)) continue; s.objects.add(e.objectId); s.hash += e.value; }
  return {accepted:true,hash:s.hash};
});

app.post('/game/sessions/:id/finish', async (req, reply) => {
  const id=(req.params as any).id; const s=sessions.get(id); if(!s)return reply.code(404).send({error:'SESSION_NOT_FOUND'});
  const elapsed=Date.now()-s.startedAt; const valid=elapsed>3_000 && elapsed<11*60_000; const bp=valid?Math.floor(s.hash/100):0;
  const w=wallets.get(s.userId) ?? {hash:0,bp:0,xp:0}; if(valid){w.hash+=s.hash;w.bp+=bp;w.xp+=Math.floor(s.hash/2);wallets.set(s.userId,w);} sessions.delete(id);
  return {validated:valid,hashEarned:valid?s.hash:0,burgerPoints:bp,xpEarned:valid?Math.floor(s.hash/2):0,trustScore:valid?90:20};
});

app.get('/marketplace/products', async () => ([
  {id:'smash-001',name:'Double Smash Burger',priceBp:500,stock:100},
  {id:'combo-001',name:'Burger + Fries + Drink',priceBp:800,stock:60}
]));

app.listen({port:Number(process.env.PORT ?? 4000),host:'0.0.0.0'}).catch(err=>{app.log.error(err);process.exit(1)});
