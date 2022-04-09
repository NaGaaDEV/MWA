import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onLoginFormFromViewChild():void {
    console.log("Login form", this.loginForm.value);
  }
  
  onLoginFormFromTemplate(from:NgForm):void {
    console.log("Login from", from.value);
  }

}
