import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-demo-page',
  template: `
    <form [formGroup]="heroForm">
      <div fxLayout="column" fxLayoutGap="10px">
        <label>selected:
          <input type="checkbox" formControlName="selected">
        </label>

        <div fxLayout fxLayoutGap="10px">
          <span>Position:</span>
          <label>x:
            <input type="number" formControlName="x">
          </label>

          <label>y:
            <input type="number" formControlName="y">
          </label>
        </div>

        <div fxLayout fxLayoutGap="10px">
          <span><input type="checkbox" formControlName="hasCard"> Card:</span>
          <ng-container formGroupName="card">
            <label>isFacingUp:
              <input type="checkbox" formControlName="isFacingUp">
            </label>

            <label>face:
              <input formControlName="face">
            </label>
          </ng-container>
        </div>
      </div>
    </form>

    {{ heroForm.get('card').status | json }}

    <lib-card [selected]="heroForm.get('selected').value" [pos]="{x: heroForm.get('x').value, y: heroForm.get('y').value}"
              [card]="cardControl.enabled ? cardControl.value : null"></lib-card>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class CardDemoPageComponent {
  heroForm: FormGroup;
  cardControl: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.listenOnDisabledCheckbox();
  }

  createForm() {
    this.heroForm = this.fb.group({
      selected: true,
      x: 0,
      y: 0,
      hasCard: false,
      card: this.fb.group({
        isFacingUp: false,
        face: 'test',
      }),
    });

    this.cardControl = this.heroForm.get('card');
  }

  onDisabledCheckbox(value: string) {
    this.cardControl[value ? 'enable' : 'disable']();
  }

  listenOnDisabledCheckbox() {
    const hasCardControl = this.heroForm.get('hasCard');
    this.onDisabledCheckbox(hasCardControl.value);
    hasCardControl.valueChanges.forEach(
      this.onDisabledCheckbox.bind(this)
    );
  }
}

