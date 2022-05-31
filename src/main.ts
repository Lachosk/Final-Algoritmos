/* eslint-disable no-param-reassign */

import './style.css';
import p5, { Image } from 'p5';
import PantallaInicio from './PantallaInicio';
import PantallaInstrucciones from './PantallaInstrucciones';
import Button from './button';

let pantallaInicio: PantallaInicio;
let pantallaInstrucciones: PantallaInstrucciones;

let pantallaI: Image;
let pantallaInstruc: Image;
let pantallas = 0;


const sketch = (p: p5) => {

  p.preload = () => {
    pantallaI = p.loadImage('../Interfaces/Interfaz_Inciio.png');
    pantallaInstruc = p.loadImage('../Interfaces/Interfaz Instrucciones.png');
  }

  p.setup = () => {
    p.createCanvas(1280, 720);
    pantallaInicio = new PantallaInicio(0, 0, pantallaI);
    pantallaInstrucciones = new PantallaInstrucciones(0, 0, pantallaInstruc);
  };

  p.draw = () => {
    switch (pantallas) {
      case 0:
        pantallas = pantallaInicio.button(p);
        pantallaInicio.show(p);
        break;
      case 1:
        pantallaInstrucciones.show(p);
        break;
      default:
        break;
    }
  };

  p.keyPressed = () => {

  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
