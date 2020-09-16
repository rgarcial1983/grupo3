import { TestBed } from '@angular/core/testing';

import { ServicioRecursoService } from './servicio-recurso.service';

describe('ServicioRecursoService', () => {
  let service: ServicioRecursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRecursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
