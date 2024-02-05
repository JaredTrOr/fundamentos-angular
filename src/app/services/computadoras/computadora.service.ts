import { Injectable } from '@angular/core';
import { TipoComputadora } from '../../models/computadoras/tipo_computadora';
import { Computadora } from '../../models/computadoras/computadora';

@Injectable({
  providedIn: 'root'
})
export class ComputadoraService {

  private computadoras: Computadora[] = [];
  private tipoComputadoras: TipoComputadora[] = [];

  constructor() {
    this.computadoras = [];
    this.tipoComputadoras = [
      {
        id: 0,
        descripcion: 'Sin definir'
      },
      {
        id: 1,
        descripcion: 'Funcional'
      },
      {
        id: 2,
        descripcion: 'No funcional'
      },
      {
        id: 3,
        descripcion: 'Defectuosa'
      }
    ]
   }

   getComputadoras(): Computadora[] {
    return this.computadoras;
   }

   setNuevaComputadora(computadora: Computadora): void {
    this.computadoras.push(computadora);
   }

   getTipoComputadoras(): TipoComputadora[] {
    return this.tipoComputadoras;
   }

   getNuevaComputadora(): Computadora {
    return {
      id: '',
      marca: '',
      modelo: '',
      anio: 2000,
      tipoComputadora: 0
    }
   }

   generateUniqueId(): string {
    const timestamp = new Date().getTime(); 
    const randomValue = Math.floor(Math.random() * 1000); 
  
    const uniqueId = `${timestamp}${randomValue}`;
  
    return uniqueId;
  }
}
