import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
import Button from './button';

export default class PantallaInstrucciones2 extends Pantalla {
  constructor(x:number, y:number, interface1:Image) {
    super(x, y, interface1);
  }
  backB = new Button(1067,596,249,77);
  cases3 = 3;

  show(p:p5) {
   this.cases3 = 3;
   p.image(this.interface1, this.x, this.y);

   if(this.backB.mouseClicked(p)){
    this.cases3 = 0;
    }
  }
}
