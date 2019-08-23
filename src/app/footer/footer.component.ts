import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  scrollToTop() {
    document.querySelector('body').scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.scrollToTop();
  }

}
