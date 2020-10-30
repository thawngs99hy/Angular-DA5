import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGvComponent } from './add-edit-gv.component';

describe('AddEditGvComponent', () => {
  let component: AddEditGvComponent;
  let fixture: ComponentFixture<AddEditGvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
