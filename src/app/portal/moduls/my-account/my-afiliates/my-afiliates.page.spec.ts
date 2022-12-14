import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDataComponent } from './my-data.component';

describe('MyAccountComponent', () => {
  let component: MyDataComponent;
  let fixture: ComponentFixture<MyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});