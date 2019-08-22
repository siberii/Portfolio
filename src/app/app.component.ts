import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('hamburgerRef', { static: true }) hamburgerElemRef;
  @ViewChild('homeRef', { static: true }) homeElemRef;

  isScrolled: boolean;
  hamburgerElement: Element;
  homeElement: Element;

  ngAfterViewInit(): void {
    this.hamburgerElement = this.hamburgerElemRef.hamburgerElemRef.nativeElement;
    this.homeElement = this.homeElemRef.heroElemRef.nativeElement;
    this.invertHamburger();
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

}
