import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  imports: [FormsModule],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca implements OnInit{
  termoBusca: string = '';

  //Injeção do ID da plataforma para saber se é servidor ou navegador
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      const salvo = localStorage.getItem('termoBusca');
      if(salvo) {
        this.termoBusca = salvo;
      }
    }
  }

  salvarNoLocalStorage(): void {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem('termoBusca', this.termoBusca);
    }
  }
}
