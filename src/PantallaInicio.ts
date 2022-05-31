import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
import Button from './button';
export default class PantallaInicio extends Pantalla {
  constructor(x:number, y:number, interface1:Image) {
    super(x, y, interface1);
  }

  botonInstruc = new Button(530,483,249,77);
  // botonHistoria = new Button(530,595,249,77);

  show(p:p5) {
   p.image(this.interface1, this.x, this.y);
  }

  button(p:p5){
    if(this.botonInstruc.click(p)){
    return 1;
    }else{
      return 0;
    }
  }
}
