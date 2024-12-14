import { ChangeDetectorRef, Component, Host, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { filter } from 'rxjs/operators';
import { LayoutService } from '../../../service/app.layout.service';
import { MenuService } from '../../../service/app.menu.service';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matMonetizationOn,matAddBusiness,matExitToApp,matHome,matBarChart,matScience,
         matInventory,matHealing, matNote,matShoppingCart,matSwapHorizontalCircle
       } from '@ng-icons/material-icons/baseline';

@Component({
  selector: '[app-menuitem]',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgIconComponent
  ],
  providers: [
    provideIcons({ 
        matMonetizationOn,matAddBusiness,matExitToApp,matHome,matSwapHorizontalCircle,
        matBarChart,matScience,matInventory,matHealing, matNote,matShoppingCart
     })
  ],
  animations: [
    trigger('children', [
        state('collapsed', style({
          height: '0',
          overflow: 'hidden' // Establece el overflow aquí, pero no lo animes
        })),
        state('expanded', style({
          height: '*',
          overflow: 'hidden' // Mantiene oculto cualquier contenido que desborde
        })),
        transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
      ])
  ],
  templateUrl: './app-menuitem.component.html',
  styleUrl: './app-menuitem.component.scss'
})
export class AppMenuitemComponent implements OnInit, OnDestroy {

  @Input() item: any;

  @Input() index!: number;

  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;

  @Input() parentKey!: string;

  active = false;

  menuSourceSubscription: Subscription;

  menuResetSubscription: Subscription;

  key: string = "";

  constructor(public layoutService: LayoutService, private cd: ChangeDetectorRef, public router: Router, private menuService: MenuService) {
      this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
          Promise.resolve(null).then(() => {
              if (value.routeEvent) {
                  this.active = (value.key === this.key || value.key.startsWith(this.key + '-')) ? true : false;
              }
              else {
                  if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
                      this.active = false;
                  }
              }
          });
      });

      this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
          this.active = false;
      });

      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(params => {
              if (this.item.routerLink) {
                  this.updateActiveStateFromRoute();
              }
          });
  }

  ngOnInit() {
      this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);

      if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
      }
  }

  updateActiveStateFromRoute() {
      let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });

      if (activeRoute) {
          this.menuService.onMenuStateChange({ key: this.key, routeEvent: true });
      }
  }

  itemClick(event: Event) {
      // avoid processing disabled items
      if (this.item.disabled) {
          event.preventDefault();
          return;
      }

      // execute command
      if (this.item.command) {
          this.item.command({ originalEvent: event, item: this.item });
      }

      // toggle active state
      if (this.item.items) {
          this.active = !this.active;
      }

      this.menuService.onMenuStateChange({ key: this.key });
  }

  get submenuAnimation() {
      return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');
  }

  @HostBinding('class.active-menuitem') 
  get activeClass() {
      return this.active && !this.root;
  }

  ngOnDestroy() {
      if (this.menuSourceSubscription) {
          this.menuSourceSubscription.unsubscribe();
      }

      if (this.menuResetSubscription) {
          this.menuResetSubscription.unsubscribe();
      }
  }
}

