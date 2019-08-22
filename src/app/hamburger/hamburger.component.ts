import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  constructor() {
  }
  @ViewChild('hamburgerRef', { static: true }) hamburgerElemRef: ElementRef;
  @Input() isScrolled: boolean;
  ngOnInit() {
  }

}
