import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  @ViewChild('heroRef', { static: true }) heroElemRef: ElementRef;

  isActive = false;
  animateOut() {
    this.isActive = true;
  }

  ngOnInit() {
  }
}
