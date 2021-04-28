import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingpeoplesComponent } from './interestingpeoples.component';

describe('InterestingpeoplesComponent', () => {
  let component: InterestingpeoplesComponent;
  let fixture: ComponentFixture<InterestingpeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingpeoplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingpeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
