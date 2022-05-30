import p5, { Image } from 'p5';
export default class PantallaInicio {
  private x: number = 0;
  private y: number = 0;
  private interface1:Image;

  constructor(x:number, y:number,interface1:Image){
    this.x = x;
    this.y = y;
    this.interface1 = interface1;
  }

  show(p:p5){
    p.ellipse(this.x,this.y,50,50)
   p.image(this.interface1,this.x,this.y);
  }

}
