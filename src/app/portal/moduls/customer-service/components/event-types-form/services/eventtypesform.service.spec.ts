import { TestBed } from '@angular/core/testing';

import { EventtypesformService } from './eventtypesform.service';

describe('EventtypesformService', () => {
  let service: EventtypesformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventtypesformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
