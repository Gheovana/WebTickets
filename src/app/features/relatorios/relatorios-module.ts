import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing-module';
import { Relatorios } from './relatorios/relatorios';

@NgModule({
  declarations: [Relatorios],
  imports: [CommonModule, RelatoriosRoutingModule],
})
export class RelatoriosModule {}
