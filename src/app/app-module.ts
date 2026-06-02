import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Totem } from './pages/totem/totem';
import { Atendimento } from './pages/atendimento/atendimento';
import { Painel } from './pages/painel/painel';
import { Relatorios } from './pages/relatorios/relatorios';
import { Sobre } from './pages/sobre/sobre';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [App, Totem, Atendimento, Painel, Relatorios, Sobre],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

