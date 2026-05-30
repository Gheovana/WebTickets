import { Component, OnInit } from '@angular/core';
import { FilaService, Senha } from '../../../core/services/fila';

@Component({
  selector: 'app-painel',
  standalone: false,
  templateUrl: './painel.component.html',
})
export class PainelComponent implements OnInit {
  ultimas: Senha[] = [];
  displayedColumns = ['codigo', 'tipo', 'guiche', 'hora'];

  constructor(private filaService: FilaService) {}

  ngOnInit() {
    // Subscreve ao historico — atualiza automaticamente
    this.filaService.historico.subscribe(hist => {
      this.ultimas = hist;
    });
  }
}