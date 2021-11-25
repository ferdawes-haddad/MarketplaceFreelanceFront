import { TestBed } from '@angular/core/testing';

import { EmploisSkylesService } from './emplois-skyles.service';

describe('EmploisSkylesService', () => {
  let service: EmploisSkylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploisSkylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
