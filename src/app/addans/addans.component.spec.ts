import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddansComponent } from './addans.component';

describe('AddansComponent', () => {
  let component: AddansComponent;
  let fixture: ComponentFixture<AddansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
