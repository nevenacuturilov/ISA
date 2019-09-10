import { TestBed } from '@angular/core/testing';

import { SedisteService } from './sediste.service';

describe('SedisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SedisteService = TestBed.get(SedisteService);
    expect(service).toBeTruthy();
  });
});
