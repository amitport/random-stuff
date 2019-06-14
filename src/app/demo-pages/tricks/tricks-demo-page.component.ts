import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tricks-demo-page',
  template: `
    <h2>Tricks</h2>
    <app-trick-2></app-trick-2>
    <app-trick-1></app-trick-1>

  `,
  encapsulation: ViewEncapsulation.None,
})
export class TricksDemoPageComponent {
}
