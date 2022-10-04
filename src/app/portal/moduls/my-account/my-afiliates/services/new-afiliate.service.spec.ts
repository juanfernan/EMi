import { TestBed } from '@angular/core/testing';

import { NewAfiliateService } from './new-afiliate.service';

describe('NewAfiliateService', () => {
  let service: NewAfiliateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAfiliateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
