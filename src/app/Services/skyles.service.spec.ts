import { TestBed } from '@angular/core/testing';

import {  SkillsEmploisService } from './skillsEmplois.service';

describe('SkylesService', () => {
  let service: SkillsEmploisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsEmploisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
