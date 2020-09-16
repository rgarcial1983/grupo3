import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRecursoComponentComponent } from './detalle-recurso-component.component';

describe('DetalleRecursoComponentComponent', () => {
  let component: DetalleRecursoComponentComponent;
  let fixture: ComponentFixture<DetalleRecursoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRecursoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRecursoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
