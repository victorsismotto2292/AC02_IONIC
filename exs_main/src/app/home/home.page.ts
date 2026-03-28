import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  alertButtons = ['OK'];

  // EXERCÍCIO 1:

  km_rodado: string = '';
  tipoCobranca: string = '';
  res_ex1: string = '';

  Cobranca() {
    const kms = parseFloat(this.km_rodado);

    if(isNaN(kms) || this.tipoCobranca == ''){
      this.res_ex1 = 'Por favor, preencha os campos fornecidos.';
      return;
    }

    let valorInicial = 0;
    let kmRodado = 0;

    if(this.tipoCobranca == 'normal'){
      valorInicial = 5;
      kmRodado = 2.5;
    }
    else if(this.tipoCobranca == 'superior'){
      valorInicial = 7.5;
      kmRodado = 3.5;
    }
    else if(this.tipoCobranca == 'VIP'){
      valorInicial = 10;
      kmRodado = 5.5;
    }

    const valorFinal = valorInicial + kmRodado*kms

    let app = 0;
    let motorista = 0;

    if(valorFinal > 150){
      app = valorFinal*0.2;
      motorista = valorFinal*0.8;
    }
    else{
      app = valorFinal*0.75;
      motorista = valorFinal*0.25;
    }

    this.res_ex1 = 
    `Valor Final: ${valorFinal.toFixed(2)} | ` +
    `Valor Motorista: ${motorista.toFixed(2)} | ` +
    `Valor Aplicativo: ${app.toFixed(2)}`;
  }

  // EXERCÍCIO 2:

  
}