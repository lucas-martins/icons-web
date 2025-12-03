import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../models/jogador.model';

@Injectable({ providedIn: 'root' })
export class JogadorService {
  private readonly baseUrl = 'http://localhost:8080/jogadores';

  constructor(private readonly http: HttpClient) {}

  listarPorTime(idTime: number): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(`${this.baseUrl}/time/${idTime}`);
  }

  listarPorPais(idPais: number): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(`${this.baseUrl}/pais/${idPais}`);
  }
}
