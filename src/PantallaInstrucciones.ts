import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
import Button from './button';

export default class PantallaInstrucciones extends Pantalla {
  constructor(x:number, y:number, interface1:Image) {
    super(x, y, interface1);
  }
  backB = new Button(1067,23,249,77);
  cases1 = 1;


  show(p:p5) {
   this.cases1 = 1;
   p.image(this.interface1, this.x, this.y);
   if(this.backB.mouseClicked(p)){
    this.cases1 = 3;
    }
  }
}
