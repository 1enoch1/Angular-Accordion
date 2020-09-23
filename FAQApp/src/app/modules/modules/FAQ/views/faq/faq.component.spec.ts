import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQComponent } from './faq.component';

describe('FAQComponent', () => {
  let component: FAQComponent;
  let fixture: ComponentFixture<FAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FAQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FAQComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.h1').textContent).toContain(
      'HAVE A QUESTION? WE CAN HELP'
    );
  });
});
