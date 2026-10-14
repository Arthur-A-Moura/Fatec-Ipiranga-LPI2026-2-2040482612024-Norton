import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraBusca } from './barra-busca/barra-busca';
import { Topo } from './topo/topo';
import { Rodape } from './rodape/rodape';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraBusca, Topo, Rodape, Menu],
  templateUrl: './app.html'
})
export class App {}
