import { Injectable } from '@angular/core';
import { Institucion } from '../Institucion';

@Injectable()
export class InstitucionService {

  instituciones: Institucion[];
  constructor() {
    this.instituciones = [
      new Institucion('San geronimo', 'cra 9, #9-29'),
      new Institucion('Vasco nunez', 'cra 1, #23-14'),
      new Institucion('Benito Dominguez', 'B/ Esmeralda, #5N-12'),
    ];
  }

  getAll() {
    return new Promise((resolve, reject) => {
      resolve(this.instituciones);
    });
  }

}
