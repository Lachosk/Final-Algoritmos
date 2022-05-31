import p5, { Image } from 'p5';
//Clase padre pantalla
export default interface Pantalla {
   x: number;
   y: number;
   screenImg: Image;

  show (p:p5): void
}
