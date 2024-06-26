import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-control',
  template: `
    <tui-input
      [ngModel]="value"
      (input)=onInputChange($event)>
      {{ text }}
      <input 
        tuiTextfield
        />
    </tui-input>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true
    }
  ]
})
export class CustomControlComponent implements ControlValueAccessor {
  @Input() text: string;
  public value: string;
  private onChange: (value: string) => void;
  private onTouched: () => void;

  public onInputChange(event: Event): void {
    if (event.target) {
      const inputEl = event.target as HTMLInputElement;
      this.onChange(inputEl.value)
    }
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }
}
