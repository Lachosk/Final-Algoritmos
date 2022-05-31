import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
export default class PantallaJuego implements Pantalla {
  x: number;
  y: number;
  screenImg: p5.Image;

  constructor(x:number, y:number, screenImg:Image) {
    this.x=x;
    this.y=y;
    this.screenImg=screenImg;
  }

  cases4 = 4;

  show(p:p5) {
   this.cases4 = 4;
   p.image(this.screenImg, this.x, this.y);
  }
}
