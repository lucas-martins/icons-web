import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

@Injectable({ providedIn: 'root' })
export class PaisService {
  private readonly baseUrl = 'http://localhost:8080/paises';

  constructor(private readonly http: HttpClient) {}

  public listar(): Observable<Pais[]> {
    return this.http.get<Pais[]>(
      `${this.baseUrl}`
    );
  }
}
