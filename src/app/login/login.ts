import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginData = {
    email: '',
    senha: ''
  };

  houverErro: boolean = false;

  efetuarLogin(): void {
    console.log('Dados capturados para login:', this.loginData);

    if(this.loginData.email === 'gabriel@about.com.br' && this.loginData.senha === '123456') {
      this.houverErro = false;
      alert('Login feito com sucesso!');
    }else{
      this.houverErro = true;
    }
  }
}
