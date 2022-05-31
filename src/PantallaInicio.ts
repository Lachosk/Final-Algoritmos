import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
import Button from './button';
export default class PantallaInicio extends Pantalla {

  constructor(x:number, y:number, interface1:Image) {
    super(x, y, interface1);
  }

  botonInstruc = new Button(530,483,249,77);
  botonHistoria = new Button(530,595,249,77);
  botonprueba = new Button(400,595,249,77);

  cases = 0;

  show(p:p5) {
   this.cases= 0;
   p.image(this.interface1, this.x, this.y);



   if(this.botonprueba.mouseClicked(p)){
    console.log("🐴");
    }



   if(this.botonInstruc.mouseClicked(p)){
    this.cases = 1;
    }

    if(this.botonHistoria.mouseClicked(p)){
      this.cases= 2;
    }
  }


}
