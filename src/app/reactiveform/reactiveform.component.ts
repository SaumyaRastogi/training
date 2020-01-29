import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, AbstractControl } from '@angular/forms';
function CustomChecked(control: AbstractControl) {
  console.log("here");
  if (control.value == false) {
    return { unchecked: true };
  }
  return null;
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  reactiveform: FormGroup;
  Name: string = "";
  Email: string = "";
  PhoneNumber: string = "";
  MothersName: string = "";
  FathersName: string = "";
  Address: string = "";
  agree: boolean = true;

  constructor(private frmbuilder: FormBuilder) {
  }

  get f() {
    return this.reactiveform.controls;
  }

  ngOnInit() {
    this.reactiveform = this.frmbuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required, Validators.email],
      PhoneNumber: ['', Validators.required],
      MothersName: ['', Validators.required],
      FathersName: ['', Validators.required],
      Address: ['', Validators.required],
      agree: ['', [Validators.required, CustomChecked]]
    })
  }



  PostData(reactiveform: any) {
    this.Name = reactiveform.controls.Name.value;
    this.Email = reactiveform.controls.Email.value;
    this.PhoneNumber = reactiveform.controls.PhoneNumber.value;
    this.MothersName = reactiveform.controls.MothersName.value;
    this.FathersName = reactiveform.controls.FathersName.value;
    this.Address = reactiveform.controls.Address.value;
    this.agree = reactiveform.controls.agree.value;

    console.log(reactiveform.controls);

  }

}
