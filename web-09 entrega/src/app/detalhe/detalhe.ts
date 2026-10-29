import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {
    obj:Produto = new Produto();
    //evento apos o componente ser carregado
    ngOnInit(){
      let json = localStorage.getItem("produto");
      if(json!=null){
        this.obj = JSON.parse(json);
      } else {
        location.href="./vitrine";
      }
    }
  
  comprar(p:Produto){
      let json = localStorage.getItem("cesta");
      const c = new Cesta(json);            
      c.adicionarItem(p);     
      localStorage.setItem("cesta", JSON.stringify(c));
      location.href="./cesta";
  }


}
