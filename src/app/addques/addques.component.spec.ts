import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquesComponent } from './addques.component';

describe('AddquesComponent', () => {
  let component: AddquesComponent;
  let fixture: ComponentFixture<AddquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
