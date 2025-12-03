import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais.model';
import { Time } from '../../models/time.model';
import { Jogador } from '../../models/jogador.model';
import { TimeService } from '../../services/time.service';
import { JogadorService } from '../../services/jogador.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SelectModule,
    FormsModule,
    TooltipModule,
    SelectButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  paises: Pais[] = [];
  times: Time[] = [];
  jogadores: Jogador[] = [];

  paisSelecionado: number | null = null;
  timeSelecionado: number | null = null;

  stateOptions: any[] = [
    { label: 'Por País', value: 'pais' },
    { label: 'Por Time', value: 'time' },
  ];

  value: string = 'time';

  constructor(
    private readonly paisService: PaisService,
    private readonly timeService: TimeService,
    private readonly jogadorService: JogadorService
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
    this.jogadores = [];
    this.timeSelecionado = null;

    if (!idPais) {
      this.times = [];
      return;
    }

    if (this.value === 'pais') {
      this.jogadorService.listarPorPais(idPais).subscribe({
        next: (resp) => (this.jogadores = resp),
        error: (err) => console.error('Erro ao listar jogadores do país', err),
      });
      return;
    }

    this.timeService.listarPorPais(idPais).subscribe({
      next: (resp) => (this.times = resp),
      error: (err) => console.error('Erro ao listar times do país', err),
    });
  }

  aoSelecionarTime(idTime: number | null): void {
    this.jogadores = [];

    if (!idTime) {
      return;
    }

    this.jogadorService.listarPorTime(idTime).subscribe({
      next: (resp) => (this.jogadores = resp),
      error: (err) => console.error('Erro ao listar jogadores do time', err),
    });
  }

  aoTrocarModo(novoModo: string) {
    this.value = novoModo;

    this.paisSelecionado = null;
    this.timeSelecionado = null;
    this.times = [];
    this.jogadores = [];
  }
}
