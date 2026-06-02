import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Totem } from './pages/totem/totem';
import { Atendimento } from './pages/atendimento/atendimento';
import { Painel } from './pages/painel/painel';
import { Relatorios } from './pages/relatorios/relatorios';
import { Sobre } from './pages/sobre/sobre';

const routes: Routes = [
  { path: '', redirectTo: 'totem', pathMatch: 'full' },
  { path: 'totem', component: Totem },
  { path: 'atendimento', component: Atendimento },
  { path: 'painel', component: Painel },
  { path: 'relatorios', component: Relatorios },
  { path: 'sobre', component: Sobre },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}