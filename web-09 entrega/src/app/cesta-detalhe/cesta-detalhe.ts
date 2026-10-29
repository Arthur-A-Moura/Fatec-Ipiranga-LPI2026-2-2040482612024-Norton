import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta-detalhe',
  styleUrl: './cesta-detalhe.css',
  templateUrl: './cesta-detalhe.html',
})
export class CestaDetalhe {
  mensagem: string = "";
  cesta: Cesta = new Cesta(null);

  ngOnInit() {
    if (typeof window !== 'undefined') {
      let json = localStorage.getItem("cesta");

      if (json != null) {
        this.cesta = new Cesta(json);
        this.mensagem = "";
      } else {
        this.mensagem = "Sua cesta esta vazia!";
      }
    }
  }

  limpar() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("cesta");
      location.href = "./promo";
    }
  }

  remover(codigo: number) {
    this.cesta.removerItem(codigo);

    localStorage.setItem("cesta", JSON.stringify(this.cesta));

    if (this.cesta.itens.length === 0) {
      this.mensagem = "Sua cesta esta vazia!";
    }
  }
}