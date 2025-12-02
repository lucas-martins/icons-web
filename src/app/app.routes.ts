import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TimesComponent } from './components/times/times.component';
import { JogadoresComponent } from './components/jogadores/jogadores.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'times',
    component: TimesComponent
  },
  {
    path: 'jogadores',
    component: JogadoresComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
