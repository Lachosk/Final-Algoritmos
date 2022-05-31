/* eslint-disable no-param-reassign */

//Se importan las clases y las librerias
import './style.css';
import p5, { Image } from 'p5';
import PantallaInicio from './PantallaInicio';
import PantallaInstrucciones from './PantallaInstrucciones';
import PantallaHistoria from './PantallaHistoria'
import PantallaInstrucciones2 from './PantallaInstrucciones2';
import PantallaJuego from './PantallaJuego';
import Bullet from './Bullet';
import Game from './Game'


//Se crean variables para cada pantalla
let pantallaInicio: PantallaInicio;
let pantallaInstrucciones: PantallaInstrucciones;
let pantallaInstrucciones2: PantallaInstrucciones2;
let pantallaHistoria: PantallaHistoria;
let pantallaJuego: PantallaJuego;
let bullet: Bullet;

//Se crean variables para cada imagen
let pantallaInstruc: Image;
let pantallaInstruc2: Image;
let pantallaI: Image;
let pantallaH: Image;
let pantallaJ: Image;
let bala: Image;


//Se define, mediante una variable, la pantalla inicial del programa
let pantallas = 0;


const sketch = (p: p5) => {
  //Se cargan todas las imagenes en el metodo Preload
  p.preload = () => {
    pantallaI = p.loadImage('../Interfaces/Interfaz_Inciio.png');
    pantallaInstruc = p.loadImage('../Interfaces/Interfaz Instrucciones.png');
    pantallaInstruc2 = p.loadImage('../Interfaces/Interfaz Instrucciones 2.png')
    pantallaH = p.loadImage('../Interfaces/Interfa_Historia.png')
    pantallaJ = p.loadImage('../Interfaces/Interfaz juego1.png')

    bala = p.loadImage('../assests/Bala.png')
  }

  //Se crean instancias de las clases
  p.setup = () => {
    p.createCanvas(1280, 720);
    pantallaInicio = new PantallaInicio(0, 0, pantallaI);
    pantallaInstrucciones = new PantallaInstrucciones(0, 0, pantallaInstruc);
    pantallaInstrucciones2 = new PantallaInstrucciones2(0,0,pantallaInstruc2)
    pantallaHistoria = new PantallaHistoria (0,0,pantallaH)
    pantallaJuego = new PantallaJuego(0,0,pantallaJ);

    //game = new Game();
  };

  //Se crean los casos para cada pantalla
  p.draw = () => {
    switch (pantallas) {
      case 0:
        pantallaInicio.show(p);
        pantallas = pantallaInicio.cases;
        break;
      case 1:
        pantallaInstrucciones.show(p);
        pantallas = pantallaInstrucciones.cases1;
        break;
        case 2:
          pantallaHistoria.show(p);
          pantallas = pantallaHistoria.cases2;
          break;
        case 3:
          pantallaInstrucciones2.show(p);
          pantallas = pantallaInstrucciones2.cases3;
          break;
        case 4:
          pantallaJuego.show(p);
          pantallas = pantallaJuego.cases4;
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
