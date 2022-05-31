import p5, { Image } from 'p5';

export default class Bullet {

  private posX: number;
  private posY: number;
  private lives: number;
  private ultimate: number;
  private tamX: number;
  private tamY: number;
  private bullet: [];
  private playerImg!: Image;

  constructor(posX:number, posY:number, lives:number, ultimate:number, tamX:number, tamY:number, bullet: [], playerImg: image){
    
    this.posX = posX;
    this.posY = posY;
    this.lives = 3;
    this.ultimate = 0;
    this.tamX = 80;
    this.tamY = 50;
    this.bullet = [];
    this.playerImg = playerImg;
  }

