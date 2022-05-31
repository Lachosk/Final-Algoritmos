import p5 from 'p5';

export default class Button {
  private x: number;
  private y: number;
  private w: number;
  private h: number;

  constructor(x: number, y: number, w: number,h: number,) {
    this.x = x;
    this.y = y;
    this.w = w
    this.h = h
  }

  click(p: p5) {
    p.rect(this.x,this.y,this.w,this.h);
    if (p.mouseIsPressed&&(p.mouseX > this.x && p.mouseY > this.y &&
        p.mouseX < this.x + this.w && p.mouseY < this.y+this.h)) {
      return true;
    } else {
      return false;

    }
  }
}







