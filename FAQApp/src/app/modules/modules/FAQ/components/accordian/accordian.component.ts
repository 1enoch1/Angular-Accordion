import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.sass'],
  animations:[
    trigger('slideInOut', [
      state('in', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        padding: '0px'
      })),
      state('out', style({
        overflow: 'hidden',
        height: '*',
        padding: '0px 0px 20px 0px'
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ])
  ]
})
export class AccordianComponent implements OnInit {
  @Input() openStatus: boolean;
  @Input() forceOpen: boolean
  @Output() currentOpenStatus = new EventEmitter<boolean>();
  
  isExpanded: boolean = true;
  animationState: string = "out";

  constructor() { }

  ngOnInit(){
  }

  
  // should use the index to toggle between accordion
  getAccordianToggle(){
    this.isExpanded = !this.isExpanded;
  }

}
