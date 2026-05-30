import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotemRoutingModule } from './totem-routing-module';
import { Totem } from './totem/totem';

@NgModule({
  declarations: [Totem],
  imports: [CommonModule, TotemRoutingModule],
})
export class TotemModule {}
