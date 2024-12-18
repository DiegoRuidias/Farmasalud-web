import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { Table, TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { LaboratoryService } from './service/laboratory.service';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-laboratory',
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
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.scss'
})
export default class LaboratoryComponent implements OnInit {
  @ViewChild('tableLaboratory') tableLaboratory!: Table;
  laboratoryService = inject(LaboratoryService);

  laboratoryList: any[] = [];
  selectedLaboratory: any[] = []
  isLoading:boolean = false

  ngOnInit(): void {
    this.isLoading = true;
      this.laboratoryService.findAll().subscribe({
        next:(data) => {
          this.laboratoryList = data;
          this.isLoading = false;
        },
        error:(err) => {
          this.isLoading = false;
        },
      })
  }

  filterGlobal(event: Event, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;
    this.tableLaboratory.filterGlobal(inputElement.value, matchMode);
  }

  openView(event: any, item: any): void {

  }

  openEdit(event: any, item: any): void {

  }

  openNew(): void {

  }
}
