'use client';

import { useEffect, useRef } from 'react';

export default function HomePage() {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let game: any;
    (async () => {
      const Phaser = await import('phaser');
      class BurgerScene extends Phaser.Scene {
        score = 0;
        label!: Phaser.GameObjects.Text;
        player!: Phaser.Physics.Arcade.Sprite;
        cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
        create() {
          this.cameras.main.setBackgroundColor('#101014');
          this.player = this.physics.add.sprite(120, 180, '').setDisplaySize(28, 28);
          this.player.setTint(0xffd84d);
          this.player.setCollideWorldBounds(true);
          this.label = this.add.text(16, 16, 'HASH 0', { fontSize: '22px', color: '#ffffff' });
          this.cursors = this.input.keyboard!.createCursorKeys();
          for (let i = 0; i < 18; i++) {
            const burger = this.physics.add.sprite(60 + (i % 6) * 70, 80 + Math.floor(i / 6) * 90, '').setDisplaySize(18, 18);
            burger.setTint(0xff7a18);
            this.physics.add.overlap(this.player, burger, () => {
              burger.destroy(); this.score += 10; this.label.setText(`HASH ${this.score}`);
            });
          }
        }
        update() {
          const speed = 170; this.player.setVelocity(0);
          if (this.cursors.left.isDown) this.player.setVelocityX(-speed);
          if (this.cursors.right.isDown) this.player.setVelocityX(speed);
          if (this.cursors.up.isDown) this.player.setVelocityY(-speed);
          if (this.cursors.down.isDown) this.player.setVelocityY(speed);
        }
      }
      game = new Phaser.Game({type: Phaser.AUTO,width: 480,height: 640,parent: gameRef.current!,physics:{default:'arcade'},scene:[BurgerScene]});
    })();
    return () => game?.destroy(true);
  }, []);

  return <main><section className="hero"><p className="kicker">PLAY · MINE · EAT</p><h1>Burger Miner</h1><p>Google Login → juega → genera Game Hash → gana Burger Points → canjea comida real.</p><button>Continuar con Google</button></section><section className="game-shell"><div ref={gameRef} /></section></main>;
}
