import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export  function CustomChecked(control: AbstractControl) {
  console.log("here");
    if (control.value == false) {
      return { agree: true };
    }
    return null;
  }
