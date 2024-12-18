import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { Table, TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-petty-cash',
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
    InputTextModule
  ],
  templateUrl: './petty-cash.component.html',
  styleUrl: './petty-cash.component.scss'
})
export default class PettyCashComponent implements OnInit {
  @ViewChild('tablePettyCash') tableCash!: Table;
  cashList: any[] = [
    {
      id:1
    }
  ];
  selectedCash: any[] = [];
  isLoading: boolean = false;

  filterGlobal(event: Event, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;
    this.tableCash.filterGlobal(inputElement.value, matchMode);
  }
  openView(event: any, item: any): void {

  }

  openEdit(event: any, item: any): void {

  }

  ngOnInit(): void {
      
  }

  openNew(): void {

  }
}
