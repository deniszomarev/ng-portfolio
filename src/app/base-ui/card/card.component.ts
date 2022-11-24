import { Component, Input, OnInit } from '@angular/core';
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

  @Input() public collapsingText: string | undefined;
  @Input() public languages: string | undefined;
  @Input() public projectImage: string | undefined;
  @Input() public projectName: string | undefined;
  @Input() public projectSite: string | undefined;
  @Input() public projectSource: string | undefined;
  //  @Input() public projectSource: string | undefined;

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
