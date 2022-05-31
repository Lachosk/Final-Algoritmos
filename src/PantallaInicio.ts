import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
import Button from './button';
export default class PantallaInicio implements Pantalla {
  x: number;
  y: number;
  screenImg: p5.Image;

  constructor(x:number, y:number, screenImg:Image) {
    this.x=x;
    this.y=y;
    this.screenImg=screenImg;
  }

  botonInstruc = new Button(530,483,249,77);
  botonHistoria = new Button(530,595,249,77);
  botonprueba = new Button(400,595,249,77);
  botonJugar= new Button(530,371,249,77);

  cases = 0;

  show(p:p5) {
   this.cases= 0;
   p.image(this.screenImg, this.x, this.y);


   if(this.botonprueba.mouseClicked(p)){
    console.log("🐴");
    }

   if(this.botonInstruc.mouseClicked(p)){
    this.cases = 1;
    }

    if(this.botonHistoria.mouseClicked(p)){
      this.cases= 2;
    }

    if(this.botonJugar.mouseClicked(p)){
      this.cases= 4;
    }

  }
}
