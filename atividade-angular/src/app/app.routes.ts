import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cadastro } from './cadastro/cadastro';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cadastro', component: Cadastro },
  { path: 'login', component: Login }
];
