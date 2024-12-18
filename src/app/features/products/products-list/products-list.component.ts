import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    TableModule,
    ProgressSpinnerModule,
    CheckboxModule,
    TooltipModule,
    InputTextModule,
    PaginatorModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  @ViewChild('tableProducts') tableProducts!: Table;
  @Input() laboratoryId: string = '';
  @Output() goLaboratory = new EventEmitter<void>(); 
  // laboratoryService = inject(LaboratoryService);

  productList: any[] = [];
  selectedProduct: any[] = []
  isLoading:boolean = false

  ngOnInit(): void {
    console.log(this.laboratoryId)
    // this.isLoading = true;
    //   this.laboratoryService.findAll().subscribe({
    //     next:(data) => {
    //       this.laboratoryList = data;
    //       this.isLoading = false;
    //     },
    //     error:(err) => {
    //       this.isLoading = false;
    //     },
    //   })
  }

  filterGlobal(event: Event, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;
    this.tableProducts.filterGlobal(inputElement.value, matchMode);
  }

  openView(event: any, item: any): void {

  }

  openEdit(event: any, item: any): void {

  }

  openNew(): void {

  }
}
