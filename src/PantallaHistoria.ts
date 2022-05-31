import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
import Button from './button';

export default class PantallaHistoria extends Pantalla {
  constructor(x:number, y:number, interface1:Image) {
    super(x, y, interface1);
  }

  backB = new Button(1067,596,249,77);

  cases2 = 2;

  show(p:p5) {
   this.cases2 = 2;
   p.image(this.interface1, this.x, this.y);

    if(this.backB.mouseClicked(p)){
      this.cases2 = 0;
    }
  }
}
