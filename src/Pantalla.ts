import p5, { Image } from 'p5';
//Clase padre pantalla
export default class Pantalla {
  protected x: number;
  protected y: number;
  protected interface1!: Image;

  //Se crea cada pantalla
  constructor(x:number, y:number, interface1:Image) {
    this.x = x;
    this.y = y;
    this.interface1 = interface1;
  }

  show(p:p5) {
    p.image(this.interface1, this.x, this.y);
  }
}
