
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNavComponent } from './demo-nav.component';

describe('DemoNavComponent', () => {
  let component: DemoNavComponent;
  let fixture: ComponentFixture<DemoNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
