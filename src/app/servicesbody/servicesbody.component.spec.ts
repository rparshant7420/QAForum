import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesbodyComponent } from './servicesbody.component';

describe('ServicesbodyComponent', () => {
  let component: ServicesbodyComponent;
  let fixture: ComponentFixture<ServicesbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
