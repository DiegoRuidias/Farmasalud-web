import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-products-laboratory',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    FormsModule,
    PaginatorModule
  ],
  templateUrl: './products-laboratory.component.html',
  styleUrl: './products-laboratory.component.scss'
})
export class ProductsLaboratoryComponent implements OnInit{
  @ViewChild('tableLaboratory') tableLaboratory!: Table;
  @Input() laboratoryList: any[] = [];
  @Output() goProducts = new EventEmitter<string>();

  laboratoryFiltered: any[] = [];
  laboratoryPaginated: any[] = [];
  selectedLaboratory: any[] = [];

  searchText: string = '';
  pageNumber: number = 0;
  pageSize: number = 9; 

  isLoading:boolean = false;

  ngOnInit(): void {
    this.applyFilters();
  }

  selectLaboratory(id: string) {
    this.goProducts.emit(id);
  }

  applyFilters() {
    // Filtrar la lista según el input de búsqueda
    this.laboratoryFiltered = this.laboratoryList.filter(lab =>
      lab.name.toLowerCase().includes(this.searchText.toLowerCase()) || // Filtra por nombre
      lab.ruc.includes(this.searchText)
    );

    // Reiniciar la paginación
    this.pageNumber = 0;
    this.updatePaginatedList();
  }

  // Método para actualizar la lista paginada
  updatePaginatedList() {
    const start = this.pageNumber * this.pageSize;
    const end = start + this.pageSize;
    this.laboratoryPaginated = this.laboratoryFiltered.slice(start, end);
  }

  // Manejar cambio de página
  onPageChange(event: any) {
    this.pageNumber = event.page;
    this.pageSize = event.rows;
    this.updatePaginatedList();
  }
}
