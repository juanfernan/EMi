import { TestBed } from '@angular/core/testing';

import { MyInvoicesService } from './my-invoices.service';

describe('MyInvoicesService', () => {
  let service: MyInvoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInvoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
