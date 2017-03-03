import { Component,ViewEncapsulation } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {MdSnackBar} from '@angular/material'
import {LogoutSnackBarComponent} from './components/snack-bar/logout-snack-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  constructor(private _authService:AuthService,
              private _router:Router,
              public snackBar:MdSnackBar){    
  }

  logout(){
    this._authService.clearToken();
    this.snackBar.openFromComponent(LogoutSnackBarComponent,{
      duration:2500,extraClasses:['snack-background']
    });
    this._router.navigate(["/Login"]);
  } 
}
