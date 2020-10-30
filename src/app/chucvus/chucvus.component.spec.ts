import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucvusComponent } from './chucvus.component';

describe('ChucvusComponent', () => {
  let component: ChucvusComponent;
  let fixture: ComponentFixture<ChucvusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChucvusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucvusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
