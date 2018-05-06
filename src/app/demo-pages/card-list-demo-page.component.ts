import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card-list-demo-page',
  template: `
    <lib-card-list [cards]="[{isFacingUp: true, face: 'face1'}, {isFacingUp: false, face: 'face2'}]"></lib-card-list>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class CardListDemoPageComponent {
}
