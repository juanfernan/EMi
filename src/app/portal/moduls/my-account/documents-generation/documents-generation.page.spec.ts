import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsGenerationPage } from './documents-generation.page';

describe('DocumentsGenerationPage', () => {
  let component: DocumentsGenerationPage;
  let fixture: ComponentFixture<DocumentsGenerationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsGenerationPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
