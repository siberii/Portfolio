import { Component, OnInit, ViewChild, ElementRef, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  constructor() {
  }
  isChecked = false;
  atHomeSection: boolean;
  atAboutSection: boolean;
  atProjectsSection: boolean;

  @ViewChild('hamburgerRef', { static: true }) hamburgerElemRef: ElementRef;
  @ViewChild('headerRef', { static: true }) headerElemRef: ElementRef;
  @ViewChild('crumsRef', { static: true }) crumsElemRef: ElementRef;
  @Input() isScrolled: boolean;
  @Input() isScrolledCrums: boolean;

  @Input() isFirstCrum: boolean;
  @Input() isSecondCrum: boolean;
  @Input() isThirdCrum: boolean;
  @Input() home: any;
  @Input() about: any;
  @Input() projects: any;
  @Input() contact: any;

  onChange(e) {
    this.isChecked = e.target.checked;
  }

  onHomeClick(isHeader?: HTMLElement) {
    this.home.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    if (!isHeader) {
      this.isChecked = !this.isChecked;
    }
  }
  onAboutClick(isHeader?: HTMLElement) {
    this.about.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    if (!isHeader) {
      this.isChecked = !this.isChecked;
    }
  }
  onProjectsClick(isHeader?: HTMLElement) {
    this.projects.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    if (!isHeader) {
      this.isChecked = !this.isChecked;
    }
  }
  onContactClick(isHeader?: HTMLElement) {
    this.contact.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    if (!isHeader) {
      this.isChecked = !this.isChecked;
    }
  }

  ngOnInit() {

  }

}
