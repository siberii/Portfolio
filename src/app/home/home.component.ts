import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
// import { particlesJS } from './../../main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  @ViewChild('heroRef', { static: true }) heroElemRef: ElementRef;
  @Input() target: any;
  particlesJS: any;
  isActive = false;

  loadParticles() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // @ts-ignore
    particlesJS.load('particles-js', './assets/nasa.json', () => {
      console.log('callback - particles-js config loaded');
    });
  }
  animateOut() {
    this.isActive = true;
  }
  scroll() {
    this.target.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    this.loadParticles();
  }
}
