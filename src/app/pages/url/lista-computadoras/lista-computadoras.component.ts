import { Component, OnInit } from '@angular/core';
import { ComputadoraService } from '../../../services/computadoras/computadora.service';
import { Computadora } from '../../../models/computadoras/computadora';

@Component({
  selector: 'app-lista-computadoras',
  templateUrl: './lista-computadoras.component.html',
  styleUrl: './lista-computadoras.component.css'
})
export class ListaComputadorasComponent implements OnInit{
  
  listaComputadoras: Computadora[] = [];

  ngOnInit(): void {
    this.listaComputadoras = this.computadoraService.getComputadoras();
  }

  constructor(private computadoraService: ComputadoraService) {}

}
