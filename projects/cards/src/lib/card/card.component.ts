import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { CanSelect } from '../behaviors/select';
import { HasPosition, Position } from '../behaviors/position';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Card } from './card';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnChanges, CanSelect, HasPosition {
  @Input() card: Card<string>;
  @Input() pos: Position = {x: 0, y: 0};
  // tslint:disable-next-line:variable-name
  private _selected = false;
  @Input() get selected() {
    return this._selected;
  }
  set selected(value: any) {
    this._selected = coerceBooleanProperty(value);
  }

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pos) {
      const {x, y} = changes.pos.currentValue;
      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        `translate(${x}px, ${y}px)`
      );
    }
  }


}
