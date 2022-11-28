import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // O MÓDULO APP IRÁ ENCAMINHAR PARA CÁ SOMENTE AS ROTAS RELACIONADAS AO HOME. LOGO,
    path: '',
    component: HomeComponent,
    children: [ // AQUI, ESTAMOS CRIANDO SUB-ROTAS NA PÁGINA HOME
      {
        path: '', // QUANDO A ROTA FOR VAZIA, IRÁ SER PROJETADO O COMPONENTE DE LOGIN
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
