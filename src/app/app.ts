import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rodape } from './rodape/rodape';
import { Topo } from './topo/topo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rodape, Topo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web05');
}
