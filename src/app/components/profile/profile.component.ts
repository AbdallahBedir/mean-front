import { Component, OnInit,trigger,state,style,
         transition, animate,keyframes } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations:[
    trigger("profileWrapper",[
      transition("void => *",[
        animate('0.7s 0.2s ease-in',keyframes([
          style({opacity:0,transform:'translate(-65%, -50%)',offset:0}),
          style({opacity:1,transform:'translate(-50%, -50%)',offset:1})
        ]))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  user:any={};
  constructor(private _authService:AuthService,
              public _router:Router){ 

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")) || this._authService.user;
  }
  checkProfile(){
 
  }

}
