import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosropaComponent } from './productosropa.component';

describe('ProductosropaComponent', () => {
  let component: ProductosropaComponent;
  let fixture: ComponentFixture<ProductosropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosropaComponent]
    });
    fixture = TestBed.createComponent(ProductosropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
