import { TestBed } from '@angular/core/testing';

import { ModalcallService } from './modalcall.service';

describe('ModalcallService', () => {
  let service: ModalcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
