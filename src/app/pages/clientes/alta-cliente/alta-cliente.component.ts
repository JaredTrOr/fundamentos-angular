import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/clientes/cliente';
import { TipoCliente } from '../../../models/clientes/tipo_cliente';
import { ClienteService } from '../../../services/clientes/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent implements OnInit{

  cliente!: Cliente;
  tipos: TipoCliente[] = []

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cliente = this.clienteService.nuevoCliente();
    this.tipos = this.clienteService.getTiposDeCliente();
  }

  insertarCliente(): void {
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }

}
