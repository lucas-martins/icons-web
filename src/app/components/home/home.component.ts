import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SelectModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  paises: Pais[] = [];

  paisSelecionado: number | null = null;

  constructor(private readonly paisService: PaisService) {}

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
}
