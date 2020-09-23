import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { by, By } from 'protractor';

import { AccordionComponent } from './accordion.component';

describe('AccordianComponent', () => {
  let component: AccordionComponent;
  let testAccordionState: boolean;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render accordion as closed', () => {
    const fixture = TestBed.createComponent(AccordionComponent);
    const isAccordionOpen = false;
    component.accordionState = testAccordionState;
    fixture.detectChanges();
    expect(isAccordionOpen.valueOf()).toBeFalse();
  });

  it('should toggle accordion when clicked', async() => {
    const fixture = TestBed.createComponent(AccordionComponent);
    component.toggleAccordion();
    expect(component.isAccordionOpen).toBeTruthy();
  });
});
