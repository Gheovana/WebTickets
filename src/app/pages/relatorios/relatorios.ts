import { Component } from '@angular/core';
import { Ticket, TicketsService } from '../../services/tickets';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.scss',
  standalone: false,
})
export class Relatorios {
  displayedColumns = ['numero', 'tipo', 'emitidaEm', 'atendidaEm', 'guiche'];

  constructor(private ticketsService: TicketsService) {}

  get tickets(): Ticket[] {
    return this.ticketsService.listarTickets();
  }

  get totalEmitidas(): number {
    return this.tickets.length;
  }

  get totalAtendidas(): number {
    return this.tickets.filter((ticket) => ticket.atendidaEm).length;
  }

  contarPorTipo(tipo: string): number {
    return this.tickets.filter((ticket) => ticket.tipo === tipo).length;
  }
}