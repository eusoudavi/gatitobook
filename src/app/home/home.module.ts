import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
