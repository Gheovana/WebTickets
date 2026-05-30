import { Component } from '@angular/core';
import { FilaService, TipoSenha } from '../../../core/services/fila';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-totem',
  standalone: false, // ← conforme instrução do professor
  templateUrl: './totem.component.html',
  styleUrls: ['./totem.component.scss']
})
export class TotemComponent {
  senhaEmitida: string | null = null;

  constructor(
    private filaService: FilaService,
    private snackBar: MatSnackBar
  ) {}

  emitir(tipo: TipoSenha) {
    const senha = this.filaService.emitirSenha(tipo);
    this.senhaEmitida = senha.codigo;
    this.snackBar.open(
      `Senha emitida: ${senha.codigo}`,
      'OK',
      { duration: 4000 }
    );
  }
}