import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CardsComponent, CardComponent, CardListComponent],
  exports: [CardsComponent, CardComponent, CardListComponent]
})
export class CardsModule { }
