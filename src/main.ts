/* eslint-disable no-param-reassign */

import './style.css';
import p5, { Image } from 'p5';
import PantallaInicio from './PantallaInicio';

let pantallaInicio: PantallaInicio;
let pantallaI:Image;
let pantallas=0;


const sketch = (p: p5) => {

  p.preload= () => {
    pantallaI = p.loadImage('../Interfaces/Interfaz_Inciio.png')
  }

  p.setup = () => {
    p.createCanvas(1280, 720);
    pantallaInicio = new PantallaInicio(0,0,pantallaI);
  };

  p.draw = () => {
    p.background(80);
    switch(pantallas){
      case 0:
      pantallaInicio.show(p);
        break;
    }

  };

  p.keyPressed = () => {

  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
