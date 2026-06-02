import { Component } from '@angular/core';
import { Ticket, TicketsService } from '../../services/tickets';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.html',
  styleUrl: './atendimento.scss',
  standalone: false,
})
export class Atendimento {
  guiche = 1;
  senhaAtual?: Ticket;
  mensagem = 'Nenhuma senha chamada ainda.';

  constructor(private ticketsService: TicketsService) {}

  chamarSenha(): void {
    const ticket = this.ticketsService.chamarProximaSenha(this.guiche);

    if (!ticket) {
      this.mensagem = 'Não há senhas aguardando atendimento.';
      this.senhaAtual = undefined;
      return;
    }

    this.senhaAtual = ticket;
    this.mensagem = `Senha ${ticket.numero} chamada no guichê ${this.guiche}.`;
  }

  finalizarAtendimento(): void {
    if (!this.senhaAtual) {
      this.mensagem = 'Nenhum atendimento em andamento.';
      return;
    }

    this.mensagem = `Atendimento da senha ${this.senhaAtual.numero} finalizado.`;
    this.senhaAtual = undefined;
  }
}