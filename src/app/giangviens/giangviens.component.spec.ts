import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiangviensComponent } from './giangviens.component';

describe('GiangviensComponent', () => {
  let component: GiangviensComponent;
  let fixture: ComponentFixture<GiangviensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiangviensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiangviensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
