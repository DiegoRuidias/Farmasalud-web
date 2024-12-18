import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { LaboratoryService } from '../laboratory/service/laboratory.service';
import { LoadingPageComponent } from '../../shared/utils/loading-page/loading-page.component';
import { ErrorPageComponent } from '../../shared/utils/error-page/error-page.component';
import { ProductsLaboratoryComponent } from './products-laboratory/products-laboratory.component';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    LoadingPageComponent,
    ErrorPageComponent,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    FormsModule,
    ProductsLaboratoryComponent,
    ProductsListComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent implements OnInit{
  laboratoryService = inject(LaboratoryService);

  laboratoryList: any[] = [];
  searchText: string = '';
  laboratoryId: string = '';
  isSelected: boolean = false;
  isLoading: boolean = false;
  isError: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.laboratoryService.findAll().subscribe({
      next:(data) => {
        this.laboratoryList = data;
        this.isLoading = false;
      },
      error:(err) => {
        this.isLoading = true;
        this.isError = true;
      },
    })
  }

  goLaboratory() {
    this.isSelected = false;
  }

  goProducts(id: string){
    this.laboratoryId = id;
    this.isSelected = true;
  }

  onKeySearch(event: any): void {
  
  }
}
