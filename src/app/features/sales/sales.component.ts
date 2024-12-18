import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { Sales } from './model/sales.model';
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    InputSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    InputGroupModule,
    InputGroupAddonModule,
    DataViewModule,
    TagModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export default class SalesComponent implements OnInit {
  barCode: boolean = false;
  productsBuy: Sales[] = [];
  totalBuy: number = 0.00;
  igvBuy: number = 0.00;
  subTotalBuy: number = 0.00;

  stateOptions: any[] = [
    { label: 'Boleta', value: 'active' },
    { label: 'Factura', value: 'inactive' },
    { label: 'N. Venta', value: 'pending' }
  ]
  products: any[] = [
  {
    id:1,
    category: 'JARABES',
    name:'AMOXICILINA - 950ml',
    price:8,
    stock: 12
  },
  {
    id:2,
    category: 'JARABES',
    name:'SALBUTAMOL - 950ml',
    price:8,
    stock: 12
  },
  {
    id:3,
    category: 'JARABES',
    name:'REPRIMAN - 950ml',
    price:4,
    stock: 12
  },

  {
    id:4,
    category: 'PASTLLAS',
    name:'PANADOL ANTIGRIPAL',
    price:4,
    stock: 12
  },
  {
    id:5,
    category: 'PASTILLAS',
    name:'AMOXICILINA - 50g',
    price:4,
    stock: 12
  },

  ]
  layout: "list" | "grid" = 'grid'
  ngOnInit(): void {
      
  }

  buyShop(item: any) {
    const existingItem = this.productsBuy.find((product: any) => product.id === item.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.stock -= 1;
      this.totalBuy += existingItem.price;

    } else {
      item.quantity = 1;
      item.stock -= 1;
      this.totalBuy += item.price;
      this.productsBuy.push(item);
    }
    this.totalBuy = parseFloat(this.totalBuy.toFixed(2));
    this.subTotalBuy = parseFloat((this.totalBuy * 0.82).toFixed(2));
    this.igvBuy = parseFloat((this.totalBuy * 0.18).toFixed(2));
  }

  deletedShop(item: any) {
    // Encuentra el índice del producto en el carrito
    const index = this.productsBuy.findIndex((product: any) => product.id === item.id);
  
    if (index !== -1) { // Si el producto existe en el carrito
      const existingItem = this.productsBuy[index];
      
      // Resta la cantidad del producto
      existingItem.quantity -= 1;
      existingItem.stock += 1;
      // Si la cantidad llega a cero, elimina el producto del carrito
      if (existingItem.quantity === 0) {
        this.productsBuy.splice(index, 1); // Elimina el producto específico
      }
  
      // Actualiza los cálculos del total, subtotal e IGV
      this.totalBuy -= existingItem.price;
      this.totalBuy = parseFloat(this.totalBuy.toFixed(2));
      this.subTotalBuy = parseFloat((this.totalBuy * 0.82).toFixed(2));
      this.igvBuy = parseFloat((this.totalBuy * 0.18).toFixed(2));// Calcula el IGV como la diferencia entre total y subtotal
    }
  }

  updateQuantity(item: any, event: any) {
    this.totalBuy = this.productsBuy.reduce((sum, item) => sum + (item.quantity * item.price), 0);

    this.totalBuy = parseFloat(this.totalBuy.toFixed(2));
    this.subTotalBuy = parseFloat((this.totalBuy * 0.82).toFixed(2));
    this.igvBuy = parseFloat((this.totalBuy * 0.18).toFixed(2));
  }


}
