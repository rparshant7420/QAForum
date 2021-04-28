import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialhighlightComponent } from './credentialhighlight.component';

describe('CredentialhighlightComponent', () => {
  let component: CredentialhighlightComponent;
  let fixture: ComponentFixture<CredentialhighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialhighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialhighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
