import { TestBed } from '@angular/core/testing';

import { CondpagService } from './condpag.service';

describe('CondpagService', () => {
  let service: CondpagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondpagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
