import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLaboratoryComponent } from './products-laboratory.component';

describe('ProductsLaboratoryComponent', () => {
  let component: ProductsLaboratoryComponent;
  let fixture: ComponentFixture<ProductsLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsLaboratoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
