import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formcomponent } from './form.component';

describe('formcomponent', () => {
  let component: formcomponent;
  let fixture: ComponentFixture<formcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ formcomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(formcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
