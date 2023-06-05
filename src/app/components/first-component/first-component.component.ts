import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  form = new FormGroup({
    num1: new FormControl(0),
    num2: new FormControl(0),
  });

  result: number;

  constructor() {
    this.result = 0;
  }

  sum() {
    let num1 = this.form.value.num1 ?? 0;
    let num2 = this.form.value.num2 ?? 0;

    this.result = num1 + num2;
  }
}
