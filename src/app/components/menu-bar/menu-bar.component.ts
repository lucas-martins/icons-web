import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, MenubarModule, RouterModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fa-solid fa-house',
        routerLink: '/'
      },
      {
        label: 'Times',
        icon: 'fa-solid fa-people-group',
        routerLink: '/times'
      },
      {
        label: 'Jogadores',
        icon: 'fa-solid fa-futbol',
        routerLink: '/jogadores'
      }
    ];
  }
}
