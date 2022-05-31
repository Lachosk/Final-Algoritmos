import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
import Button from './button';

export default class PantallaInstrucciones implements Pantalla {
  x: number;
  y: number;
  screenImg: p5.Image;

  constructor(x:number, y:number, screenImg:Image) {
    this.x=x;
    this.y=y;
    this.screenImg=screenImg;
  }
  backB = new Button(1067,23,249,77);
  cases1 = 1;


  show(p:p5) {
   this.cases1 = 1;
   p.image(this.screenImg, this.x, this.y);
   if(this.backB.mouseClicked(p)){
    this.cases1 = 3;
    }
  }
}
