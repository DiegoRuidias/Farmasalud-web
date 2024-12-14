import { Component, inject, OnInit } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';
import { CommonModule } from '@angular/common';
import { AppMenuitemComponent } from './app-menuitem/app-menuitem.component';
import { MenuService } from '../../service/app.menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    AppMenuitemComponent
  ],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.scss'
})
export class AppMenuComponent implements OnInit{
  menuService = inject(MenuService);
  model: any[] = [];

  ngOnInit(): void {
    // this.menuService.menus$.subscribe((menus) => {
    //   this.model = menus;
    // })
    // this.model = [
    //     {
    //       label: 'Sistema',
    //       items: [
    //           {
    //               label: 'Menús',
    //               icon: 'matList',
    //               routerLink: '/system/menus'
    //           },
          
    //       ]
    //     },
    //     {
    //       label: 'Seguridad',
    //       items: [
    //         {
    //           label: 'Roles',
    //           icon: 'matSecurity',
    //           routerLink: '/security/roles'
    //         },
    //         {
    //           label: 'Usuarios',
    //           icon: 'matPeopleAlt',
    //           routerLink: ['/security/users']
    //         },            
          
    //       ]
    //     },
    //     {
    //       label: 'Ajustes Generales ',
    //       items: [
    //         {
    //           label: 'Configuraciones',
    //           icon:'matSettings',
    //           items: [
    //             {
    //               label: 'Periodos E.',
    //               icon: 'matCalendarMonth',
    //               routerLink: ['/config/periodos']
    //             },
    //             {
    //               label: 'Documentación',
    //               icon: 'matFolder',
    //               routerLink: ['/config/documentos']
    //             },
    //             {
    //               label: 'T. de Documento',
    //               icon: 'matDescription',
    //               routerLink: ['/config/tiposDocumentos']
    //             },
    //           ]
    //         },
    //         {
    //           label: 'Niveles - Grados',
    //           icon: 'matBarChart',
    //           routerLink: ['/config/niveles-grados']
    //         },  
    //         {
    //           label: 'Pagos',
    //           icon: 'matMonetizationOn',
    //           routerLink: ['/config/pagos']
    //         },
    //         {
    //           label: 'Predeterminados',
    //           icon: 'matSettingsApplications',
    //           routerLink: ['/config/predeterminados']
    //         },
    //       ]
    //     },
    //     {
    //       label: 'Mi perfil',
    //       items: [
    //         {
    //           label: 'Cerrar sesión',
    //           icon: 'matExitToApp',
    //           routerLink: ['/config/users']
    //         },           
          
    //       ]
    //     }
    //   ]
    this.model = [
        {
            label: 'Dashboard',
            items: [
                {
                    label: 'Panel de inicio',
                    icon: 'matHome',
                    routerLink: ['/']
                },
            
            ]
        },
        {
          label: 'POS',
          items: [
            {
              label: 'Caja Chica',
              icon: 'matMonetizationOn',
              routerLink: ['/POS/caja-chica'],
            },
            {
              label: 'Realizar Venta',
              icon: 'matAddBusiness',
              routerLink: ['/POS/ventas'],
            },       
          
          ]
        },
        {
          label: 'VENTAS',
          items: [
            {
              label: 'Historial de Ventas',
              icon: 'matBarChart',
              routerLink: ['/system/ventas'],
            },
            {
              label: 'Notas de crédito',
              icon: 'matNote',
              routerLink: ['/system/ventas'],
            },            
          
          ]
        },
        {
          label: 'Inventario',
          items: [
            {
              label: 'Productos',
              icon: 'matShoppingCart',
              items: [
                {
                  label: 'Laboratorios',
                  icon: 'matScience',
                  routerLink: ['/productos/laboratorios']
                },
                {
                  label: 'Productos',
                  icon: 'matHealing',
                  routerLink: ['/productos/search']
                }
              ]
            },
            {
              label: 'Inventariar',
              icon: 'matInventory',
              routerLink: ['/config/pagos'],
              items: [
                {
                  label: 'Movimientos',
                  icon: 'matSwapHorizontalCircle',
                  routerLink: ['/config/periodos']
                }
              ]
            },
          ]
        },
        
        {
          label: 'Mi perfil',
          items: [
            {
              label: 'Cerrar sesión',
              icon: 'matExitToApp',
              routerLink: ['/config/users']
            },           
          
          ]
        }
      ]
  }

}
