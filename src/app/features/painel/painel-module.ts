import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing-module';
import { Painel } from './painel/painel';

@NgModule({
  declarations: [Painel],
  imports: [CommonModule, PainelRoutingModule],
})
export class PainelModule {}
