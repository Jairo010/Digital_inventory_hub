import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./session/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'signup',
        loadComponent: () => import('./session/signup/signup.component').then(m => m.SignupComponent)
    },
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
            {
                path: 'shops',
                title: 'Tiendas', 
                loadComponent: () => import('./dashboard/pages/shops/shops.component').then(m => m.ShopsComponent),
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
