import { TestBed } from '@angular/core/testing';

import { WebinnarService } from './webinnar.service';

describe('WebinnarService', () => {
  let service: WebinnarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebinnarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
