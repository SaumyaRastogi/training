import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  onClickSubmit(formdata:any){
    console.log(formdata);
  }
  constructor() { }

  ngOnInit() {
  }


}
