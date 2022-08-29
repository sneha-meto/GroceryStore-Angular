import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router:Router){

  }
  canActivate( ): boolean {
    if (this.auth.checkToken()){
       return true;
    }
   else{
    this.router.navigateByUrl('login')
    return false;
   }
  }
  
}
