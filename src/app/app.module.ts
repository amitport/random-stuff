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

@NgModule({
  declarations: [
    AppComponent,
    DemoNavComponent,
    DefaultPageComponent,
    CardDemoPageComponent,
    CardListDemoPageComponent,
    LayoutDemoPageComponent,
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
