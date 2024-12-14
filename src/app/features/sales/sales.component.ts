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
  value2: number = 1
  stateOptions: any[] = [
    { label: 'Boleta', value: 'active' },
    { label: 'Factura', value: 'inactive' },
    { label: 'N. Venta', value: 'pending' }
  ]
  products: any[] = [
  {
    category: 'JARABES',
    name:'AMOXICILINA - 950ml',
    price:8
  },
  {
    category: 'JARABES',
    name:'SALBUTAMOL - 950ml',
    price:8
  },
  {
    category: 'JARABES',
    name:'REPRIMAN - 950ml',
    price:4
  },

  {
    category: 'PASTLLAS',
    name:'PANADOL ANTIGRIPAL',
    price:4
  },
  {
    category: 'PASTILLAS',
    name:'AMOXICILINA - 50g',
    price:4
  },

  ]
  layout: "list" | "grid" = 'grid'
  ngOnInit(): void {
      
  }
  getSeverity(item: any): void{

  }
}
