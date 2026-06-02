import { Injectable } from '@angular/core';

export type TipoSenha = 'SP' | 'SG' | 'SE';

export interface Ticket {
  numero: string;
  tipo: TipoSenha;
  emitidaEm: Date;
  atendidaEm?: Date;
  guiche?: number;
}

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private tickets: Ticket[] = [];
  private chamadas: Ticket[] = [];
  private sequencias = { SP: 0, SG: 0, SE: 0 };

  emitirSenha(tipo: TipoSenha): Ticket {
    this.sequencias[tipo]++;

    const agora = new Date();
    const yy = String(agora.getFullYear()).slice(2);
    const mm = String(agora.getMonth() + 1).padStart(2, '0');
    const dd = String(agora.getDate()).padStart(2, '0');
    const sq = String(this.sequencias[tipo]).padStart(2, '0');

    const ticket: Ticket = {
      numero: `${yy}${mm}${dd}-${tipo}${sq}`,
      tipo,
      emitidaEm: agora,
    };

    this.tickets.push(ticket);
    return ticket;
  }

  chamarProximaSenha(guiche: number): Ticket | undefined {
    const proxima =
      this.tickets.find((t) => t.tipo === 'SP' && !t.atendidaEm) ||
      this.tickets.find((t) => t.tipo === 'SE' && !t.atendidaEm) ||
      this.tickets.find((t) => t.tipo === 'SG' && !t.atendidaEm);

    if (!proxima) return undefined;

    proxima.atendidaEm = new Date();
    proxima.guiche = guiche;

    this.chamadas.unshift(proxima);
    this.chamadas = this.chamadas.slice(0, 5);

    return proxima;
  }

  listarTickets(): Ticket[] {
    return this.tickets;
  }

  ultimasChamadas(): Ticket[] {
    return this.chamadas;
  }
}