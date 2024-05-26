import { Component } from '@angular/core';
import { ApiCepService } from '../api-cep.service';
import { catchError, of } from 'rxjs'; // Import catchError and of

@Component({
    selector: 'app-cep',
    templateUrl: './cep.component.html',
    styleUrls: ['./cep.component.scss'],
    standalone: true
})
export class CepComponent {
    cep = '';
    endereco: any = {};
    carregando = false;  
    mensagemDeErro: string | null = null;  

    constructor(private apiCepService: ApiCepService) {}

    buscarEndereco(cep: string) {
        this.carregando = true;
        this.mensagemDeErro = null; 
        this.cep = cep;
        if(cep.length == 0) {
            this.mensagemDeErro = "Você precisa digitar um CEP.";
            this.carregando = false;
            return;
        }
        this.apiCepService.getEndereco(this.cep).pipe(
            catchError(error => {
                this.mensagemDeErro = this.getmensagemDeErro(error); 
                console.error(error);
                return of(null);
            })
        ).subscribe(dados => {
            this.endereco = dados;
            this.carregando = false;
        });
    }

    private getmensagemDeErro(erro: any): string {

        if (erro.status === 0) {
            return "Cep inválido, Digite neste formato 21031690 ou 21031-690.";
        }
        return "Ocorreu um erro ao buscar o endereço.";
    }
}
