import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { tuiIsString } from '@taiga-ui/cdk';

@Component({
  selector: 'app-zd-header',
  templateUrl: './zd-header.component.html',
  styleUrls: ['./zd-header.component.scss'],
})
export class ZdHeaderComponent {
  readonly collaborators = [`Carol Cleveland`, `Neil Innes`];

  readonly tabs = [
    `Progects`,
    `Tehnologies`,
    `Summary`,
    `Higher education`,
    `Contacts`,
  ];

  activeElement = String(this.tabs[0]);

  open = false;

  get activeItemIndex(): number {
    if (this.collaborators.includes(this.activeElement)) {
      // return this.tabs.indexOf(this.collaborators);
    }

    return this.tabs.indexOf(this.activeElement);
  }

  stop(event: Event): void {
    console.log(event);
    // We need to stop tab custom event so parent component does not think its active
    event.stopPropagation();
  }

  onClick(activeElement: string): void {
    this.activeElement = activeElement;
    this.open = false;
  }

  isString(tab: unknown): tab is string {
    return tuiIsString(tab);
  }
}
