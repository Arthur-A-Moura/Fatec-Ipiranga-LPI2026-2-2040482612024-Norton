import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {
  termo: String = "";

  buscar(){
    localStorage.setItem("termoBusca", JSON.stringify(this.termo));  
    location.href="./busca";
  }

}
