import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRecursosComponentComponent } from './listado-recursos-component.component';

describe('ListadoRecursosComponentComponent', () => {
  let component: ListadoRecursosComponentComponent;
  let fixture: ComponentFixture<ListadoRecursosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRecursosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRecursosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
