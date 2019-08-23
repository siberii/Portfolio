import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('heroRef', { static: true }) heroElemRef: ElementRef;

  constructor() { }

  scrollToTop() {
    document.querySelector('body').scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.scrollToTop();
  }

}
