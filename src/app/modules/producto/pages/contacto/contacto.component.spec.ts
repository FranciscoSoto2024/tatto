import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoporteService } from 'src/app/services/soporte.service';
import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoComponent]
    });
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
