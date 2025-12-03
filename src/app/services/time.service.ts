import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageResponseDTO, Time } from '../models/time.model';

@Injectable({ providedIn: 'root' })
export class TimeService {
  private readonly baseUrl = 'http://localhost:8080/times';

  constructor(private readonly http: HttpClient) {}

  public listar(pagina = 1): Observable<PageResponseDTO<Time>> {
    return this.http.get<PageResponseDTO<Time>>(
      `${this.baseUrl}?page=${pagina}`
    );
  }

  public listarPorPais(idPais: number): Observable<Time[]> {
    return this.http.get<Time[]>(`${this.baseUrl}/pais/${idPais}`);
  }
}
