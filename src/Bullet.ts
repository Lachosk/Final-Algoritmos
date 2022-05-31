import p5, { Image } from 'p5';

export default class Bullet {

  private x: number;
  private y: number;
  private damage: number;
  private tamX: number;
  private tamY: number;
  private vel: number;
  private bulletImg!: Image; 

  constructor(x:number, y:number, damage:number, tamX:number, tamY:number, vel:number, bulletImg: Image){

    this.x = x;
    this.y = y;
    this.damage = 1;
    this.tamX = 40;
    this.tamY = 80;
    this.vel = 5;
    this.bulletImg = bulletImg;

  }

  show(p:p5) {
    p.image(this.bulletImg, this.x, this.y);
  }
}
