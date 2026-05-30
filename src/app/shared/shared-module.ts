import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MATERIAL_MODULES = [
  MatToolbarModule, MatCardModule, MatButtonModule,
  MatIconModule, MatBadgeModule, MatTableModule,
  MatTabsModule, MatChipsModule, MatDividerModule,
  MatSnackBarModule, MatProgressSpinnerModule,
];

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [CommonModule, ...MATERIAL_MODULES],
})
export class SharedModule {}

// EXPLICAÇÃO:
// Ao exportar tudo, qualquer feature module que importar
// SharedModule já terá acesso a todos os componentes Material.