import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
    selector:'app-form',
    templateUrl:'./form.component.html',
    styleUrls:['./form.component.css']
})
export class FormComponent{
    formControl:any;
    email = new FormControl('', [Validators.required, Validators.email]);
    
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : ''
    }
}