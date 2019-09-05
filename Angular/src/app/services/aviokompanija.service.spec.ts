import { TestBed } from '@angular/core/testing';

import { AviokompanijaService } from './aviokompanija.service';

describe('AviokompanijaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AviokompanijaService = TestBed.get(AviokompanijaService);
    expect(service).toBeTruthy();
  });
});
