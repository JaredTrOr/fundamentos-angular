import { Injectable } from '@angular/core';
import { Cliente } from '../../models/clientes/cliente';
import { TipoCliente } from '../../models/clientes/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[] = [];
  private tipos: TipoCliente[] = [];

  constructor() { 
    this.clientes = [];
    this.tipos = [
      {
        id: 0,
        descripcion: 'Sin definir'
      },
      {
        id: 1,
        descripcion: 'Clientes activos'
      },
      {
        id: 2,
        descripcion: 'Clientes inactivos'
      },
      {
        id: 3,
        descripcion: 'Clientes deudores'
      }
    ];
  }

  getClientes(): Cliente [] {
    return this.clientes;
  }

  getTiposDeCliente(): TipoCliente [] {
    return this.tipos;
  }

  agregarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length + 1,
      nombre: '',
      domicilio: '',
      rfc: '',
      tipoCliente: 0
    };
  }

}
