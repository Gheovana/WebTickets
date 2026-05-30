import { Component, OnInit } from '@angular/core';
import { FilaService, Senha } from '../../../core/services/fila';

@Component({
  selector: 'app-atendente',
  standalone: false,
  templateUrl: './atendente.component.html',
})
export class AtendenteComponent implements OnInit {
  senhaAtual: Senha | null = null;
  guiche = 1; // pode ter múltiplos guichês
  totais = { sp: 0, sg: 0, se: 0 };

  constructor(private filaService: FilaService) {}

  ngOnInit() {
    // Atualiza os totais sempre que a fila mudar
    this.filaService.filaSP.subscribe(() => this.atualizarTotais());
    this.filaService.filaSG.subscribe(() => this.atualizarTotais());
    this.filaService.filaSE.subscribe(() => this.atualizarTotais());
  }

  chamarProxima() {
    // FilaService aplica a lógica SP → SE|SG → SP
    this.senhaAtual = this.filaService.chamarProxima(this.guiche);
  }

  finalizarAtendimento() {
    this.senhaAtual = null;
  }

  atualizarTotais() {
    this.totais = this.filaService.getTotais();
  }
}