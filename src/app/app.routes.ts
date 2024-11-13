import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        //Main route
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        //Children routes of the main route
        children: [
            {
                path: 'users',
                title: 'Usuarios', 
                loadComponent: () => import('./dashboard/pages/users/users.component').then(m => m.UsersComponent),
            }, 
        ]
    },
    {
        //Dafault route to redirect to
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
