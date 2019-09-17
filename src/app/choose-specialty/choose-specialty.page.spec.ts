import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSpecialtyPage } from './choose-specialty.page';

describe('ChooseSpecialtyPage', () => {
  let component: ChooseSpecialtyPage;
  let fixture: ComponentFixture<ChooseSpecialtyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSpecialtyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSpecialtyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
