import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileListModalPage } from './file-list-modal.page';

describe('InformativeModalComponent', () => {
  let component: FileListModalPage;
  let fixture: ComponentFixture<FileListModalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileListModalPage]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
