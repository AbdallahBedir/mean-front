import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class NonAuthGuard implements CanActivate{
    constructor(private _authService:AuthService,
                public router:Router){

    }
    canActivate(){
        if(this._authService.isLoggedIn()){
           this.router.navigate(["/Home"]);
            return false;
        }
        return true;
    }
}