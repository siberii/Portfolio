import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  @ViewChild('heroRef', { static: true }) heroElemRef: ElementRef;
  @Input() target: any;


  isActive = false;
  animateOut() {
    this.isActive = true;
  }
  scroll() {
    this.target.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
  }
}
