import { Component, OnInit ,ViewEncapsulation,trigger,state,style,
         transition, animate,keyframes} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router'
import {MdSnackBar} from '@angular/material'
import {LoginSnackBarComponent} from '../snack-bar/login-snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None,
  animations:[
    trigger("formWrapper",[
      transition("void => *",[
        animate('0.7s 0.2s ease-in',keyframes([
          style({opacity:0,transform:'translate(-65%, -50%)',offset:0}),
          style({opacity:1,transform:'translate(-50%, -50%)',offset:1})
        ]))
      ])
    ])
  ]

})
export class LoginComponent implements OnInit {

  username:FormControl;
  password:FormControl;
  loginForm:FormGroup;
  invalidForm:boolean=false;
  message:string;
  
  constructor(
      private _authService:AuthService,fb:FormBuilder,
      private _router:Router,
      public snackBar:MdSnackBar){
      
      this.username    = new FormControl('',[Validators.required,Validators.minLength(3)]);
      this.password    = new FormControl('',[Validators.required]);

      this.loginForm = fb.group({
          username:this.username,
          password:this.password
      });
  }

  ngOnInit() {

  }
  onSubmit(form){
    if(form.invalid){
      this.invalidForm=true;
    }
    else{
      this.invalidForm=true;
      this._authService.authenticateUser(form.value).map(res=>res.json()).subscribe(
        data => {
          if(data.success){
              this._authService.saveToken(data.token,data.user);
              this.snackBar.openFromComponent(LoginSnackBarComponent,{
                duration:2500,extraClasses:['snack-background']
              })
              this._router.navigate(["/Dashboard"]);
          }
          else{
            this.message=data.msg;
          }
        },
        error => console.log(`error occured while regestring the user`),
        () =>  {}
      )
    }
  }
}
