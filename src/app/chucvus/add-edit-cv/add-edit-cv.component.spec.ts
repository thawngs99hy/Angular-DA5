import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCvComponent } from './add-edit-cv.component';

describe('AddEditCvComponent', () => {
  let component: AddEditCvComponent;
  let fixture: ComponentFixture<AddEditCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
