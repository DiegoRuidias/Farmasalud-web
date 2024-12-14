import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';

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
        TooltipModule
  ],
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.scss'
})
export default class LaboratoryComponent implements OnInit{
  laboratoryList: any[] = [
    {

    }
  ];
  selectedLaboratory: any[] = []
  isLoading:boolean = false

  openView(event: any, item: any): void {

  }

  openEdit(event: any, item: any): void {

  }

  ngOnInit(): void {
      
  }

  openNew(): void {

  }
}
