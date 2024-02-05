import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/clientes/cliente';
import { ClienteService } from '../../../services/clientes/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent implements OnInit{

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes()
  }


}
