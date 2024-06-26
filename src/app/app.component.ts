import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <tui-root>
      <div class="app__container">
        <form
          [formGroup]="keyValueForm">
          <app-custom-control 
            text="Введите ключ"
            formControlName="key"/>
          <app-custom-control
            text="Введите значение"
            formControlName="value"/>
        </form>
        <div class="app__container_res">
          {{ keyValueForm.value | json }}
        </div>
      </div>  
    </tui-root>
  `
})
export class AppComponent {
  private title = 'EnKodTask4';
  public keyValueForm: FormGroup;

  constructor() {
    this.keyValueForm = new FormGroup({
      key: new FormControl('key'),
      value: new FormControl('value')
    })
  }
}
