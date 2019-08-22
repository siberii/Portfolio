import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  isBasic = false;
  isIntermediate = true;

  constructor() { }

  toggleLevel(event): void {
    if (event.target.innerText === 'Basic') {
      this.isBasic = true;
      this.isIntermediate = false;
    } else {
      this.isBasic = false;
      this.isIntermediate = true;
    }

  }
  ngOnInit() {
  }

}
