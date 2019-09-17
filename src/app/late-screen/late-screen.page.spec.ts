import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateScreenPage } from './late-screen.page';

describe('LateScreenPage', () => {
  let component: LateScreenPage;
  let fixture: ComponentFixture<LateScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
