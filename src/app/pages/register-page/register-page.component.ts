import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {


  userModel=new User("bob","bob@mail.com","8223737777","123456")
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  submitForm(){
    // console.log(this.userModel)
   this.auth.register(this.userModel).subscribe((response)=>{console.log(response)})
  }

}
