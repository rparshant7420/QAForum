import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryprofileComponent } from './categoryprofile.component';

describe('CategoryprofileComponent', () => {
  let component: CategoryprofileComponent;
  let fixture: ComponentFixture<CategoryprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
