import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('heroRef', { static: true }) heroElemRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
