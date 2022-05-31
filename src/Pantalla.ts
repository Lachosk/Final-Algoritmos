import p5, { Image } from 'p5';
//Clase padre pantalla
export default interface Pantalla {
   x: number;
   y: number;
   screenImg: Image;

  //Se crea cada pantalla
  /*constructor(x:number, y:number, screenImg:Image) {
    this.x = x;
    this.y = y;
    this.screenImg = screenImg;
  }*/

  show (p:p5): void
}
