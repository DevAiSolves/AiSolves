# Burger Miner MVP

**PLAY · MINE · EAT** — Google Login → arcade game → validated Game Hash → Burger Points → food marketplace → QR redemption.

> Important: the browser does **not** mine Bitcoin. `Game Hash` is an internal gameplay metric. Real BTC mining/treasury and any transferable token are deliberately isolated behind future feature flags.

## Architecture

- `apps/web`: Next.js + Phaser mobile-first client.
- `apps/api`: Fastify API, Google ID-token verification, game sessions, reward validation, marketplace starter endpoints.
- `packages/database`: Prisma/PostgreSQL canonical schema with wallet ledger and redemptions.
- Redis/Postgres local infra via Docker Compose.

## Core trust boundary

`Game Client -> Session/Seed -> Event batches -> Server validation -> Ledger -> Burger Points -> Marketplace -> Signed redemption`

The server is authoritative. Never trust client score, hash, wallet balances, product stock, or redemption state.

## Quick start

```bash
cp .env.example .env
pnpm install
docker compose up -d
pnpm --filter @burger/database generate
pnpm dev
```

Web: `http://localhost:3000`  
API: `http://localhost:4000/health`

## MVP status

Included:
- Next.js landing and Phaser arcade prototype.
- Google ID token verification endpoint.
- Game-session creation, batched collect events, duplicate protection and finish validation.
- Prisma models for users, profiles, wallets, immutable ledger entries, sessions, merchants, products and redemptions.
- Marketplace starter endpoint.
- Feature flags for future Bitcoin/token layers.

Next implementation steps:
1. Replace in-memory API stores with Prisma + Redis.
2. Add authenticated HttpOnly refresh sessions.
3. Make seeded map generation deterministic on both client/server.
4. Add movement/path anti-cheat and rate limiting.
5. Add transactional ledger writes and daily reward caps.
6. Build merchant scanner + signed QR redemption.
7. Add missions, referrals, leaderboards and passive miners.
8. Integrate a read-only BTC treasury adapter only after the loyalty economy is stable.

## Suggested domain model

Currencies:
- `XP`: progression only.
- `HASH`: game/mining-power metric, no direct monetary claim.
- `BP`: non-transferable loyalty points redeemable only in the marketplace.

Feature flags:
- `FEATURE_BITCOIN=false`
- `FEATURE_TOKEN=false`

## Security baseline

- Verify Google ID tokens server-side (`aud`, `iss`, signature, expiry).
- HttpOnly/Secure/SameSite auth cookies for production.
- Rate-limit auth, sessions, event ingestion and redemption endpoints.
- BigInt/Decimal for economic values; never IEEE float balances.
- Atomic DB transactions for redemption and ledger mutations.
- Signed/opaque redemption tokens, single-use and expiring.
- WAF + CSP + CSRF protection + audit logs.

## Product note

Use original maze/character/art assets. Do not ship Pac-Man copyrighted visual assets or branding.
