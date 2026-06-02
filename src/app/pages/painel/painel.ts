import { Component } from '@angular/core';
import { Ticket, TicketsService } from '../../services/tickets';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.html',
  styleUrl: './painel.scss',
  standalone: false,
})
export class Painel {
  constructor(private ticketsService: TicketsService) {}

  get chamadas(): Ticket[] {
    return this.ticketsService.ultimasChamadas();
  }

  get senhaAtual(): Ticket | undefined {
    return this.chamadas[0];
  }
}