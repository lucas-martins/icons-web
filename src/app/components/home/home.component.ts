import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais.model';
import { Time } from '../../models/time.model';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SelectModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  paises: Pais[] = [];
  times: Time[] = [];

  paisSelecionado: number | null = null;
  timeSelecionado: number | null = null;

  constructor(
    private readonly paisService: PaisService,
    private readonly timeService: TimeService
  ) {}

  ngOnInit(): void {
    this.carregarPaises();
  }

  carregarPaises(): void {
    this.paisService.listar().subscribe({
      next: (resp) => {
        this.paises = resp;
      },
      error: (err) => console.error('Erro ao listar países', err),
    });
  }

    aoSelecionarPais(idPais: number | null): void {
    this.timeSelecionado = null;
    this.times = [];

    if (!idPais) {
      return;
    }

    this.timeService.listarPorPais(idPais).subscribe({
      next: (resp) => (this.times = resp),
      error: (err) => console.error('Erro ao listar times do país', err),
    });
  }
}
