import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('hamburgerRef', { static: true }) hamburgerElemRef;
  @ViewChild('homeRef', { static: true }) homeElemRef;
  @ViewChild('projectsRef', { static: true }) projectsElemRef;

  isScrolled: boolean;
  isScrolledCrums: boolean;

  isFirstCrum = true;
  isSecondCrum: boolean;
  isThirdCrum: boolean;

  hamburgerElement: Element;
  homeElement: Element;
  crumsElement: Element;
  projectsElement: Element;

  ngAfterViewInit(): void {
    this.hamburgerElement = this.hamburgerElemRef.hamburgerElemRef.nativeElement;
    this.homeElement = this.homeElemRef.heroElemRef.nativeElement;
    this.crumsElement = this.hamburgerElemRef.crumsElemRef.nativeElement;
    this.projectsElement = this.projectsElemRef.heroElemRef.nativeElement;
    this.invertHamburger();
    this.invertCrums();
    this.invertThirdCrum();
  }

  invertHamburger() {

    const homeOption = {
      rootMargin: '-120px 0px 0px 0px'
    };

    const homeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            this.isScrolled = true;
          } else {
            this.isScrolled = false;
          }
        });
      },
      homeOption
    );

    homeObserver.observe(this.homeElement);
  }

  invertCrums() {
    const homeOption = {
      rootMargin: '-450px 0px 0px 0px'
    };

    const homeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            this.isScrolledCrums = true;
            this.isSecondCrum = true;
            this.isFirstCrum = false;
            this.isThirdCrum = false;
          } else {
            this.isScrolledCrums = false;
            this.isSecondCrum = false;
          }
        });
      },
      homeOption
    );

    homeObserver.observe(this.homeElement);
  }

  invertThirdCrum() {
    const homeOption = {
      rootMargin: '0px 0px 0px 0px'
    };

    const homeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            this.isThirdCrum = false;
            this.isSecondCrum = true;
          } else {
            this.isThirdCrum = true;
            this.isFirstCrum = false;
            this.isSecondCrum = false;
          }
        });
      },
      homeOption
    );

    homeObserver.observe(this.projectsElement);
  }
}
