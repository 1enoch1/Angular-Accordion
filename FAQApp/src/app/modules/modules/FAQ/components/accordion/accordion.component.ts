import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass'],
})
export class AccordionComponent implements OnInit {

  activeAccordion = 'One'

  constructor() {}

  ngOnInit() {
  }

  isActive = (name: string) => this.activeAccordion === name

  setActive = (name: string) => this.activeAccordion = name
}
