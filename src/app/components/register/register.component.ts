import { Component, OnInit , ViewEncapsulation,trigger,state,style,
         transition, animate,keyframes} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material'
import {RegisterSnackBarComponent} from '../snack-bar/register-snack-bar.component';

function EmailValidator(input:FormControl){
    const regExp = new RegExp(/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/);
    let result = regExp.test(input.value);
    return result ? null : {RegMisMatch:true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
export class RegisterComponent implements OnInit {
  name:FormControl;
  email:FormControl;
  username:FormControl;
  password:FormControl;
  registerForm:FormGroup;
  invalidForm:boolean=false;

  constructor(
      private _authService:AuthService,fb:FormBuilder,
      private _router:Router,
      public snackBar: MdSnackBar){

      this.name        = new FormControl('');
      this.email       = new FormControl('',[Validators.required,EmailValidator]);
      this.username    = new FormControl('',[Validators.required,Validators.minLength(3)]);
      this.password    = new FormControl('',[Validators.required]);

      this.registerForm = fb.group({
          name     :this.name,
          email    :this.email,
          username :this.username,
          password :this.password
      });
  }

  ngOnInit() {
      
  }

  openSnackBar() {
    this.snackBar.openFromComponent(RegisterSnackBarComponent,{
      duration:2500,extraClasses:['snack-background']
    });    
  }

  onSubmit(registeredForm){
    if(registeredForm.invalid){
      this.invalidForm=true;
    }
    else{
      this.invalidForm=true;
      this._authService.registerUSer(registeredForm.value).map(x=>x.json()).subscribe(
        data => {
          if(data.success){
              this._router.navigate(["/Login"]);
              this.openSnackBar();
          }
          else{
            return;
          }
        },
        error => console.log(`error occured while regestring the user${error}`),
        () => {}
      )
    }   
  }
}
