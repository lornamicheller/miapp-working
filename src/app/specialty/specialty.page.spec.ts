import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyPage } from './specialty.page';

describe('SpecialtyPage', () => {
  let component: SpecialtyPage;
  let fixture: ComponentFixture<SpecialtyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
