import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposTattooComponent } from './tipos-tattoo.component';

describe('TiposTattooComponent', () => {
  let component: TiposTattooComponent;
  let fixture: ComponentFixture<TiposTattooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposTattooComponent]
    });
    fixture = TestBed.createComponent(TiposTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
