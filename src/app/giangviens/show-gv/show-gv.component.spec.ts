import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGvComponent } from './show-gv.component';

describe('ShowGvComponent', () => {
  let component: ShowGvComponent;
  let fixture: ComponentFixture<ShowGvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
