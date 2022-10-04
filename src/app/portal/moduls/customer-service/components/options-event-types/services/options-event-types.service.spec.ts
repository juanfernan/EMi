import { TestBed } from '@angular/core/testing';

import { OptionsEventTypesService } from './options-event-types.service';

describe('OptionsEventTypesService', () => {
  let service: OptionsEventTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsEventTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
