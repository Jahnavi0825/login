import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  emailFormGroup : FormGroup;
  constructor() {
    this.emailFormGroup=new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email])
      })
   }

   hide = true;

  
}
function openNewTab() {
  throw new Error('Function not implemented.');
}

