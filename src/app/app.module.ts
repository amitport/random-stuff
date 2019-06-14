import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNavComponent } from './demo-nav/demo-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { CardsModule } from 'cards';
import { DefaultPageComponent } from './default-page.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardDemoPageComponent } from './demo-pages/card-demo-page.component';
import { LayoutDemoPageComponent } from './demo-pages/layout-demo-page.component';
import { CardListDemoPageComponent } from './demo-pages/card-list-demo-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TricksDemoPageComponent } from './demo-pages/tricks/tricks-demo-page.component';
import { DraggableDirective } from './demo-pages/tricks/draggable.directive';
import { Trick2Component } from './demo-pages/tricks/trick-2/trick-2.component';
import { Trick1Component } from './demo-pages/tricks/trick-1/trick-1.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoNavComponent,
    DefaultPageComponent,
    CardDemoPageComponent,
    CardListDemoPageComponent,
    LayoutDemoPageComponent,

    TricksDemoPageComponent, DraggableDirective, Trick1Component, Trick2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DefaultPageComponent,
      },
      {
        path: 'card',
        component: CardDemoPageComponent,
      },
      {
        path: 'card-list',
        component: CardListDemoPageComponent,
      },
      {
        path: 'layout',
        component: LayoutDemoPageComponent,
      },
      {
        path: 'tricks',
        component: TricksDemoPageComponent,
      }
    ]),

    ReactiveFormsModule,

    LayoutModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    CardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
