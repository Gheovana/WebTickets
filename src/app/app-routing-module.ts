import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'totem', pathMatch: 'full' },
  {
    path: 'totem',
    loadChildren: () =>
      import('./features/totem/totem-module')
        .then(m => m.TotemModule)
  },
  {
    path: 'atendente',
    loadChildren: () =>
      import('./features/atendente/atendente-module')
        .then(m => m.AtendenteModule)
  },
  {
    path: 'painel',
    loadChildren: () =>
      import('./features/painel/painel-module')
        .then(m => m.PainelModule)
  },
  {
    path: 'relatorios',
    loadChildren: () =>
      import('./features/relatorios/relatorios-module')
        .then(m => m.RelatoriosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// EXPLICAÇÃO do loadChildren:
// Lazy loading = o código de cada módulo só é baixado quando
// o usuário navega para aquela rota. Deixa o app mais rápido.