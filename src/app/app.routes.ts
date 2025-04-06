import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-up'
    },
    {
        path: 'sign-up',
        loadComponent: () => import('./pages/sign-up/sign-up.component').then(c => c.SignUpComponent)
    }
];
