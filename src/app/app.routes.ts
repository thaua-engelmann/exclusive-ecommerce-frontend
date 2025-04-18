import { Route } from '@angular/router';
import { AUTH_ROUTES } from './domain/auth/auth.routes';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-up',
  },
  ...AUTH_ROUTES,
];
