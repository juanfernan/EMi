import { TestBed } from '@angular/core/testing';

import { DocumentsGenerationService } from './documents-generation.service';

describe('DocumentsGenerationService', () => {
  let service: DocumentsGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
