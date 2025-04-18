import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./pages/sign-up/sign-up.page').then((c) => c.SignUpPage),
  },
];
