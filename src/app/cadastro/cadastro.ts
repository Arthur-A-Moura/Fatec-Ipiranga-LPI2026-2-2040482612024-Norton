import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  mensagem: String = "";
  obj: Cliente = new Cliente();

  ngOnInit(){
    this.carregar();
  }

  gravar(){
    this.mensagem = "Seu cadastro foi realizado com sucesso!";
    let json = JSON.stringify(this.obj);
    localStorage.setItem("cadastro", json);
  }

  carregar(){
    this.mensagem = "";
    let json = localStorage.getItem("cadastro");
    if(json!=null){
      this.obj = JSON.parse(json);
    }
  }

  alterarSenha(){}
  remover(){}


}
