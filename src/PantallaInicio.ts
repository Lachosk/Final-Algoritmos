import p5, { Image } from 'p5';
import Pantalla from './Pantalla';
export default class PantallaInicio extends Pantalla {
  constructor(x:number, y:number, interface1:Image) {
    super(x, y, interface1);
  }
  show(p:p5) {
   p.image(this.interface1, this.x, this.y);
  }
}
