import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    async loadComponent() {
      return (await import('@pages/home/home.component')).HomeComponent;
    },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
