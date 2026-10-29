import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
    obj: Cliente = new Cliente();
    mensagem: String = "";

    ngOnInit(){
      let json = localStorage.getItem("cadastro");
      if(json!=null){
        location.href="./cadastro";
      }
    }


    fazerLogin(){      
      if(this.obj.senha=="Teste123"){
        this.obj.nome = this.obj.email;
        localStorage.setItem("cadastro", JSON.stringify(this.obj));
        this.mensagem = "";
        location.href="./promo";
      } else {
        this.mensagem = "Email ou senha incorretos! Verifique";
      }  
    }

}
