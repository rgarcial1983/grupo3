import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsuarioComponentComponent } from './detalle-usuario-component.component';

describe('DetalleUsuarioComponentComponent', () => {
  let component: DetalleUsuarioComponentComponent;
  let fixture: ComponentFixture<DetalleUsuarioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleUsuarioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleUsuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
