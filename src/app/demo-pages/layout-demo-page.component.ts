import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-demo-page',
  template: `
    <div class="wrapper">
      <header class="header">My header</header>

      <div>Panel A</div>
      <div>Panel B</div>
      <div>Panel C</div>
      <div>Panel D</div>
      <div>Panel E</div>
      <div>Panel F</div>
      <div>Panel G</div>
      <div>Panel H</div>
      <div>Panel I</div>
      <div>Panel J</div>

      <footer class="footer">My footer</footer>
    </div>

  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout-demo-page.component.scss']
})
export class LayoutDemoPageComponent {
}
