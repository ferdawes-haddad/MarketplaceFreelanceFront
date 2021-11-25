import { TestBed } from '@angular/core/testing';

import { UserSkylesService } from './user-skyles.service';

describe('UserSkylesService', () => {
  let service: UserSkylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSkylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
