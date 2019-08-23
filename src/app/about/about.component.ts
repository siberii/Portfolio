import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  @ViewChild('heroRef', { static: true }) heroElemRef: ElementRef;

  ngOnInit() {

  }

}
