import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';

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
  isChecked: boolean = false;



  constructor(private frmbuilder: FormBuilder) {
    this.reactiveform = frmbuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required, Validators.email],
      PhoneNumber: ['', Validators.required],
      MothersName: ['', Validators.required],
      FathersName: ['', Validators.required],
      Address: ['', Validators.required],
      isChecked: ['', Validators.required],

    })
  }

  ngOnInit() {
  }


  PostData(reactiveform: any) {
  this.Name = reactiveform.controls.Name.value;
    this.Email = reactiveform.controls.Email.value;
    this.PhoneNumber = reactiveform.controls.PhoneNumber.value;
    this.MothersName = reactiveform.controls.MothersName.value;
    this.FathersName = reactiveform.controls.FathersName.value;
    this.Address = reactiveform.controls.Address.value;
    this.isChecked = reactiveform.controls.isChecked.value;
    console.log(reactiveform.controls);

  }


  OnClick(isValid: boolean): void {
    this.isChecked = !isValid;
    console.log(this.isChecked);
  }

}
