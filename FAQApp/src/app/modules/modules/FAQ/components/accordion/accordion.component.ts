import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass'],
  animations: [
    trigger('slideOpen', [
      state(
        'in',
        style({
          opacity: '0',
          overflow: 'hidden',
          height: '0px',
          padding: '0px',
        })
      ),
      state(
        'out',
        style({
          overflow: 'hidden',
          height: '*',
          padding: '0px 0px 20px 0px',
          background: '#fff',
          margin: '10px',
          width: '100%'
        })
      ),
      transition('in => out', animate('200ms ease-out')),
      transition('out => in', animate('200ms ease-in')),
    ]),
    trigger('animateIcon', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(45deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in')),
    ]),
  ],
})
export class AccordionComponent implements OnInit, OnChanges {
  iconState: string = 'default';
  animateAccordion: string = 'out';
  @Input() index: number = 0;
  @Input() question: string;
  @Input() answer: string;
  @Input() accordionState: boolean;
  @Input() forceAccordionOpen: boolean;
  @Output() currentAccordionState = new EventEmitter<boolean>();


  isAccordionOpen: boolean = true;


  constructor() {}

  ngOnInit() {
    this.isAccordionOpen = this.accordionState;
    this.animateAccordion = this.isAccordionOpen ? 'in' : 'out';
    this.iconState = this.iconState === 'default' ? 'rotated' : 'default';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['forceAccordionOpen']) {
      this.isAccordionOpen = true;
      this.animateAccordion = 'in';
      this.currentAccordionState.emit(this.isAccordionOpen);
    }
  }

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
    this.animateAccordion = this.isAccordionOpen ? 'in' : 'out';
    this.iconState = this.iconState === 'default' ? 'rotated' : 'default';
    this.currentAccordionState.emit(this.isAccordionOpen);
  }

}
