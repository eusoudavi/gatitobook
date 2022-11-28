import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((moduloRecebido) => moduloRecebido.HomeModule)
    // ACIMA, ESTAMOS ENCAMINHANDO AS ROTAS DO HOME PARA SEU RESPECTIVO routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
