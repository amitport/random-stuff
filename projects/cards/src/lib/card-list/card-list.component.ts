import { Component, Input } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input() cards: Card<string>[];

}
