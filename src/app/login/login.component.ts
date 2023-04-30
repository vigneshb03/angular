import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
constructor(private userService : UserService,private router:Router,private activatedRoute:ActivatedRoute) { }
loginForm !:FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    })
  }

  password:string = '';
  emailFormControl = new FormControl('',[Validators.required,Validators.email,Validators.pattern('vigneshvickyred@gmail.com')]);
  passwordFormControl = new FormControl('',[Validators.required])
  matcher = new MyErrorStateMatcher();
  matcher1 = new MyErrorStateMatcher();
  email : string = '';
  errorMsg : string= '';
  showLoginForm = true;

  submitForm(){
    var login = {
      "email":this.email,
      "password":this.password
    }
  }




















}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
