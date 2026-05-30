import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type TipoSenha = 'SP' | 'SG' | 'SE';

export interface Senha {
  codigo: string;
  tipo: TipoSenha;
  emitidaEm: Date;
  chamadaEm?: Date;
  guiche?: number;
  atendida: boolean;
  descartada: boolean;
}

@Injectable({ providedIn: 'root' })
export class FilaService {

  private filaSP$ = new BehaviorSubject<Senha[]>([]);
  private filaSG$ = new BehaviorSubject<Senha[]>([]);
  private filaSE$ = new BehaviorSubject<Senha[]>([]);
  private historico$ = new BehaviorSubject<Senha[]>([]);
  private contadores = { SP: 0, SG: 0, SE: 0 };
  private ultimoTipo: TipoSenha | null = null;

  filaSP = this.filaSP$.asObservable();
  filaSG = this.filaSG$.asObservable();
  filaSE = this.filaSE$.asObservable();
  historico = this.historico$.asObservable();

  emitirSenha(tipo: TipoSenha): Senha {
    this.contadores[tipo]++;
    const seq = String(this.contadores[tipo]).padStart(2, '0');
    const agora = new Date();
    const yy = String(agora.getFullYear()).slice(-2);
    const mm = String(agora.getMonth() + 1).padStart(2, '0');
    const dd = String(agora.getDate()).padStart(2, '0');
    const codigo = `${yy}${mm}${dd}-${tipo}${seq}`;
    const descartada = Math.random() < 0.05;

    const senha: Senha = {
      codigo, tipo, emitidaEm: agora,
      atendida: false, descartada
    };

    if (!descartada) {
      const fila: BehaviorSubject<Senha[]> =
        tipo === 'SP' ? this.filaSP$ :
        tipo === 'SE' ? this.filaSE$ : this.filaSG$;
      fila.next([...fila.getValue(), senha]);
    }
    return senha;
  }

  chamarProxima(guiche: number): Senha | null {
    let senha: Senha | null = null;

    if (this.ultimoTipo === 'SP' || this.ultimoTipo === null) {
      senha = this._popSE() || this._popSG();
    } else {
      senha = this._popSP();
      if (!senha) senha = this._popSE() || this._popSG();
    }

    if (senha) {
      senha.chamadaEm = new Date();
      senha.guiche = guiche;
      senha.atendida = true;
      this.ultimoTipo = senha.tipo;
      const hist: Senha[] = this.historico$.getValue();
      this.historico$.next([senha, ...hist].slice(0, 5));
    }
    return senha;
  }

  private _popSP(): Senha | null { return this._pop(this.filaSP$); }
  private _popSE(): Senha | null { return this._pop(this.filaSE$); }
  private _popSG(): Senha | null { return this._pop(this.filaSG$); }

  private _pop(subj: BehaviorSubject<Senha[]>): Senha | null {
    const fila = subj.getValue();
    if (fila.length === 0) return null;
    const [proxima, ...resto] = fila;
    subj.next(resto);
    return proxima;
  }

  getTotais() {
    return {
      sp: this.filaSP$.getValue().length,
      sg: this.filaSG$.getValue().length,
      se: this.filaSE$.getValue().length,
    };
  }
}