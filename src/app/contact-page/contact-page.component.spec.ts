import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactpagecomponent } from './contact-page.component';

describe('contactpagecomponent', () => {
  let component: contactpagecomponent;
  let fixture: ComponentFixture<contactpagecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ contactpagecomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(contactpagecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
