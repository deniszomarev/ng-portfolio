import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  bannerImage = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;
  expanded = false;
  index = 1;
  testForm = new FormGroup({
    testValue: new FormControl(``, Validators.required),
  });

  collapsingText =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit ` +
    `sed do eiusmod tempor incididunt ut labore et dolore ` +
    `magna aliqua.`;

  get linesLimit(): number {
    return this.expanded ? 10 : 3;
  }

  expandText(): void {
    this.expanded = !this.expanded;
  }

  onIndexChange(index: number): void {
    this.index = index;
  }

  ngOnInit(): void {}
}
