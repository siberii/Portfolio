import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  constructor() {
  }
  isChecked = false;

  @ViewChild('hamburgerRef', { static: true }) hamburgerElemRef: ElementRef;
  @Input() isScrolled: boolean;
  @Input() home: any;
  @Input() about: any;
  @Input() projects: any;
  @Input() contact: any;

  onChange(e) {
    console.log(e.target.checked);
    this.isChecked = e.target.checked;
  }

  onHomeClick() {
    this.home.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.isChecked = !this.isChecked;
  }
  onAboutClick() {
    this.about.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.isChecked = !this.isChecked;
  }
  onProjectsClick() {
    console.log(this.projects);

    this.projects.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.isChecked = !this.isChecked;
  }
  onContactClick() {
    this.contact.heroElemRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.isChecked = !this.isChecked;
  }

  ngOnInit() {

  }

}
