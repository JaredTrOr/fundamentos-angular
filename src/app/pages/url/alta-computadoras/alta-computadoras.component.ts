import { Component, OnInit } from '@angular/core';
import { ComputadoraService } from '../../../services/computadoras/computadora.service';
import { TipoComputadora } from '../../../models/computadoras/tipo_computadora';
import { Computadora } from '../../../models/computadoras/computadora';

@Component({
  selector: 'app-alta-computadoras',
  templateUrl: './alta-computadoras.component.html',
  styleUrl: './alta-computadoras.component.css'
})
export class AltaComputadorasComponent implements OnInit{

  tipoComputadoras: TipoComputadora[] = [];
  nuevaComputadora!: Computadora;

  ngOnInit(): void {
    this.tipoComputadoras = this.computadoraService.getTipoComputadoras();
    this.nuevaComputadora = this.computadoraService.getNuevaComputadora();
  }

  constructor(private computadoraService: ComputadoraService) {}

  registrarNuevaComputadora(): void { 
    this.nuevaComputadora.id = this.computadoraService.generateUniqueId();
    this.computadoraService.setNuevaComputadora(this.nuevaComputadora);
    this.nuevaComputadora = this.computadoraService.getNuevaComputadora();
  }

}
