import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { logoutGuard } from './guards/logout.guard';

export const routes: Routes = [

    {
        path: 'auth',
        loadComponent:() => import('./shared/auth/login/login.component'),
        canActivate:[noAuthGuard],
    },
    {
        path: 'home',
        loadComponent: () => import('./shared/layout/views/app-layout/app-layout.component'),
        children: [
            {
                path: '',
                title: 'Panel de Inicio',
                loadComponent: () => import('./features/dashboard/dashboard.component'),
                data: { breadcrumb: 'Dashboard' },
            },
            {
                path:'unauthorized',
                loadComponent: () => import('./shared/utils/error-page/error-401/error-401.component')
            },
        ],
    },
    {
        path: 'POS',
        loadComponent: () => import('./shared/layout/views/app-layout/app-layout.component'),
        children: [
            {
                path: 'caja-chica',
                title: 'Caja Chica',
                loadComponent: () => import('./features/petty-cash/petty-cash.component'),
                data: { breadcrumb: 'Caja Chica' },
            },
            {
                path: 'ventas',
                title: 'Realizar Ventas',
                loadComponent: () => import('./features/sales/sales.component'),
                data: { breadcrumb: 'Caja Chica' },
            },
        ],
    },
    {
        path: 'productos',
        loadComponent: () => import('./shared/layout/views/app-layout/app-layout.component'),
        children: [
            {
                path: 'laboratorios',
                title: 'Laboratorios',
                loadComponent: () => import('./features/laboratory/laboratory.component'),
                data: { breadcrumb: 'Caja Chica' },
            },
            {
                path: 'search',
                title: 'Buscar Productos',
                loadComponent: () => import('./features/products/products.component'),
                data: { breadcrumb: 'Buscar Productos' },
            },
        ],
    },
    {
        path: 'logout',
        loadComponent:()=> import('./shared/layout/views/app-layout/app-layout.component'),
        canActivate:[logoutGuard],
    },

];
