import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  @ViewChild('registrationForm')
  registrationForm!:NgForm;

  constructor(private usersDataService:UsersDataService) { }

  ngOnInit(): void {
  }

  onRegister():void {
    console.log("Registration form", this.registrationForm.value);
    if(this.registrationForm.value["password"] == this.registrationForm.value["repeat-password"]) {
      this.usersDataService.addUser(this.registrationForm.value).subscribe({
        next: user => { console.log("User added", user); },
        error: err => console.log("Service error", err),
        complete: () => console.log("Registration done")
      })
    }
  }
}
