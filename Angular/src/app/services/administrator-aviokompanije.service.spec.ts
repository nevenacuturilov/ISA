import { TestBed } from '@angular/core/testing';

import { AdministratorAviokompanijeService } from './administrator-aviokompanije.service';

describe('AdministratorAviokompanijeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministratorAviokompanijeService = TestBed.get(AdministratorAviokompanijeService);
    expect(service).toBeTruthy();
  });
});
