import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //, HomeModule -- NÃO VAMOS MAIS IMPORTAR O MÓDULO DIRETAMENTE, MAS COM A ROTA, SOB DEMANDA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
