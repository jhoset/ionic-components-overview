import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IonInput} from "@ionic/angular";

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {

  public inputModel = '';
  @ViewChild('ionInputEl', {static: true}) ionInputEl!: IonInput;

  name: string = 'Armin';

  user = {
    email: '',
    password: ''
  }

  public componentDescription = 'The input component is a wrapper to the HTML input element with custom styling and additional functionality. ' +
    'It accepts most of the same properties as the HTML input and integrates with the keyboard on mobile devices.'

  constructor() {
  }

  onSubmit(form: NgForm) {
    console.log(form.form.value)
  }


  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  onIonInput(ev: any) {
    const value = ev.target!.value;
    //? Removes non-alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '')

    //? Update both, the state variable and the component value to keep them in sync
    this.ionInputEl.value = this.inputModel = filteredValue;
  }


}
