import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinProfilePage } from './checkin-profile.page';

describe('CheckinProfilePage', () => {
  let component: CheckinProfilePage;
  let fixture: ComponentFixture<CheckinProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
