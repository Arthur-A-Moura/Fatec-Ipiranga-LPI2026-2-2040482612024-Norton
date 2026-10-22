import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { BarraBusca } from '../barra-busca/barra-busca';

@Component({
  imports: [Menu, BarraBusca],
  selector: 'app-topo',
  styleUrl: './topo.css',
  templateUrl: './topo.html',
})
export class Topo {}
