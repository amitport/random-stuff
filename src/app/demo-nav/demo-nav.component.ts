import {Component, ContentChild, TemplateRef} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-demo-nav',
  templateUrl: './demo-nav.component.html',
  styleUrls: ['./demo-nav.component.css']
})
export class DemoNavComponent {
  @ContentChild('nav') navTemplate: TemplateRef<any>;
  @ContentChild('main') mainTemplate: TemplateRef<any>;

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) {}
}
