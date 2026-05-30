import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendenteRoutingModule } from './atendente-routing-module';
import { Atendente } from './atendente/atendente';

@NgModule({
  declarations: [Atendente],
  imports: [CommonModule, AtendenteRoutingModule],
})
export class AtendenteModule {}
