import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

import { TimeService } from '../../services/time.service';
import { Time } from '../../models/time.model';

@Component({
  selector: 'app-times',
  imports: [CommonModule, PaginatorModule],
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss'],
})
export class TimesComponent implements OnInit {
  times: Time[] = [];
  paginaAtual = 1;
  totalRegistros = 0;
  tamanhoPagina = 10;

  constructor(private readonly timeService: TimeService) {}

  ngOnInit(): void {
    this.carregarTimes(1);
  }

  carregarTimes(pagina: number): void {
    this.timeService.listar(pagina).subscribe({
      next: (resp) => {
        this.paginaAtual = resp.pagina;
        this.totalRegistros = resp.totalRegistros;
        this.tamanhoPagina = resp.tamanho;
        this.times = resp.data;
      },
      error: (err) => console.error('Erro ao listar times', err),
    });
  }

  aoMudarPagina(event: any): void {
    const page = event.page + 1;
    this.carregarTimes(page);
  }
}
