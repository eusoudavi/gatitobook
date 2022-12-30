import { NovoAnimalComponent } from './novo-animal/novo-animal.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    }
  },
  {
    path: 'novo',
    component: NovoAnimalComponent
  },
  {
    path: ':animalID', // AO COLOCAR : ESTAMOS DIZENDO QUE ESSA INFORMAÇÃO SERÁ UMA VARIÁVEL
    component: DetalheAnimalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
