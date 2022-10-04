import { TestBed } from '@angular/core/testing';

import { NewCoordinationsService } from './new-coordinations.service';

describe('NewCoordinationsService', () => {
  let service: NewCoordinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCoordinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
