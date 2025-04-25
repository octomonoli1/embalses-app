import { TestBed } from '@angular/core/testing';

import { EmbalsesService } from './embalses.service';

describe('EmbalsesService', () => {
  let service: EmbalsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbalsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
