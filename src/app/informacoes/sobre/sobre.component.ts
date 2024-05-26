import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
  standalone: true
})
export class SobreComponent {
  mostrarSobre = false;
  turma = '';
  turno = '';
  unidade = '';
  nome = '';

  alternarSobre() {
    this.mostrarSobre = !this.mostrarSobre; 
  }

  constructor() {
    this.turma = 'ADS0303N';
    this.turno = 'Noite';
    this.unidade = 'Bonsucesso';
    this.nome = 'Lucas Sales Pires'

  }
}
