import { Component } from '@angular/core';
import { TicketsService, TipoSenha } from '../../services/tickets';

@Component({
  selector: 'app-totem',
  templateUrl: './totem.html',
  styleUrl: './totem.scss',
  standalone: false,
})
export class Totem {
  senhaGerada = '';

  constructor(private ticketsService: TicketsService) {}

  emitir(tipo: TipoSenha): void {
    const ticket = this.ticketsService.emitirSenha(tipo);
    this.senhaGerada = ticket.numero;
  }
}