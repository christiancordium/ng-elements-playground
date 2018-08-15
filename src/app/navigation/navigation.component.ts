import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation-view',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavigationComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
