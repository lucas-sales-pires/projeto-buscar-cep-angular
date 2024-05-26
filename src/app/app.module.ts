import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { SobreComponent } from './informacoes/sobre/sobre.component'
import { CepComponent } from './cep/cep/cep.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SobreComponent,
    CepComponent
  ],
  providers: [],
})
export class AppModule { }
