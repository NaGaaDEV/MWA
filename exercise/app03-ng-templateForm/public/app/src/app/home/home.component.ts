import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';

class Credential{
  username!:string;
  password!:string;
  constructor(us:string, pw:string) {
    this.username= us;
    this.password= pw;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("templateForm")
  templateForm!:NgForm;

  credential!:Credential;
  constructor() {
    this.credential = new Credential("Jack", "JPW");
  }

  ngOnInit(): void {
    setTimeout(() => this.templateForm.setValue(this.credential));
  }

  login(form:NgForm):void {
    console.log(form.value);
  }

  loginWithViewChild():void {
    console.log(this.templateForm.value);
  }

}
