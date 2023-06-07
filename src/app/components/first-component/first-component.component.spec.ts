import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentComponent } from './first-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [FirstComponentComponent],
    });
    fixture = TestBed.createComponent(FirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should add 2 numbers ok', () => {
    const app = fixture.componentInstance;

    const inputNumber1 = fixture.nativeElement.querySelector(
      'input[name="number1"]'
    );
    const inputNumber2 = fixture.nativeElement.querySelector(
      'input[name="number2"]'
    );
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );

    inputNumber1.value = 5;
    inputNumber2.value = 15;

    inputNumber1.dispatchEvent(new Event('input'));
    inputNumber2.dispatchEvent(new Event('input'));

    submitButton.click();

    expect(app.result).toEqual(20);
  });
});
