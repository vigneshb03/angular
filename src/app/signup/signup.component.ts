import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignuForm } from '../models/signup.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  private signupuser: SignuForm = new SignuForm();

  registerForm!: FormGroup;
  constructor(
    private fB: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
  }
  reigisterFormSubmit() {

    this.signupuser.email = this.registerForm.value.email;
    this.signupuser.name = this.registerForm.value.name;
    this.signupuser.phone = this.registerForm.value.phone;
    this.signupuser.password = this.registerForm.value.password;
    this.signupuser.dob = this.registerForm.value.dob;
    this.signupuser.confirmpassword = this.registerForm.value.confirmpassword;

    this.userService.RegistrationPost(this.signupuser).subscribe(res=>{
      
    })
   }
}
