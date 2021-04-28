import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecompoComponent } from './profilecompo.component';

describe('ProfilecompoComponent', () => {
  let component: ProfilecompoComponent;
  let fixture: ComponentFixture<ProfilecompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
