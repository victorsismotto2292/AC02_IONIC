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

  km_rodado = '';
  res_ex1 = '';
  tipoCobranca = '';

  inicial_normal = 5.00;
  inicial_superior = 7.50;
  inicial_vip = 10.00;

  Cobranca(){
    const km_rodado = parseFloat(this.km_rodado);

    if(isNaN(km_rodado)){
      this.res_ex1 = 'Por favor, digite algo válido ou preencha os valores dados.';
    }

    if(this.tipoCobranca == 'normal'){
      const valor_normal = this.inicial_normal + parseFloat(this.km_rodado)*2.5;
      const valor_app = valor_normal*0.25;
      const valor_moto = valor_normal*0.75;

      this.res_ex1 =
      `Valor final: ${valor_normal}` + ' |' + ` Valor do motorista: ${valor_moto}` + ' |'
      + ` Valor do aplicativo: ${valor_app}`;
    }
    else if(this.tipoCobranca == 'superior'){
      const valor_superior = this.inicial_superior + parseFloat(this.km_rodado)*3.5;
      const valor_app = valor_superior*0.25;
      const valor_moto = valor_superior*0.75;

      this.res_ex1 = 
      
      `Valor final: ${valor_superior}` + ' |' + ` Valor do motorista: ${valor_moto}` + ' |'
      + ` Valor do aplicativo: ${valor_app}`;
    }
    else if(this.tipoCobranca == 'VIP'){
      const valor_vip = this.inicial_vip + parseFloat(this.km_rodado)*5.5;
      const valor_app = valor_vip*0.25;
      const valor_moto = valor_vip*0.75;

      this.res_ex1 = 
      
      `Valor final: ${valor_vip}` + ' |' + ` Valor do motorista: ${valor_moto}` + ' |'
      + ` Valor do aplicativo: ${valor_app}`;
    }
  }
}
