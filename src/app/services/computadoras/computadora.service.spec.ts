import { TestBed } from '@angular/core/testing';

import { ComputadoraService } from './computadora.service';

describe('ComputadoraService', () => {
  let service: ComputadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
