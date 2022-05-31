/* eslint-disable no-param-reassign */
import './style.css';
import p5, { Image } from 'p5';
import PantallaInicio from './PantallaInicio';

let interface1:Image;


const sketch = (p: p5) => {
  p.preload= () => {
    interface1 = p.loadImage('../Interfaces/Interfaz_Inciio.png')
  }

  p.setup = () => {
    p.createCanvas(1280, 720);
  };

  p.draw = () => {
    const pantalla1 = new PantallaInicio(0,0,interface1);

    p.background(80);
    pantalla1.show(p);
  };

  p.keyPressed = () => {

  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
