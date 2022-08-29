import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm=new FormGroup({
  //   email: new FormControl("g@mail.com"),
  //   password: new FormControl('123')
  // })
  loginResponse = ''
  loginClass = ''
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  submitForm() {
    // console.log(this.userModel)
    this.auth.login(this.loginForm.value).subscribe((response) => {
      console.log(response)
      this.loginResponse = "logged in successfully, thank you"
      this.loginClass = 'alert-success'
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
      this.router.navigateByUrl('home')

    },
      (error) => {
        console.log(error)
        this.loginResponse = "login failed, try again"
        this.loginClass = 'alert-danger'
      }
    );
  }
}
