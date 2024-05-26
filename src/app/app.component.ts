
import { Component } from '@angular/core';
import { SobreComponent } from './informacoes/sobre/sobre.component';
import { CepComponent } from './cep/cep/cep.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [SobreComponent, CepComponent, FormsModule, RouterOutlet, CommonModule], // Import the components,
})
export class AppComponent {
  title = 'projeto-consumir-api';
}
