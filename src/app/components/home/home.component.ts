import { Component, OnInit ,trigger,state,style
        ,animate,transition,keyframes } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger("mainContent",[
        transition("void => *",[
          animate('.5s 0.2s ease-in',keyframes([
              style({opacity:0,transform:'translateY(-30px)',offset:0}),
              style({opacity:1,transform:'translateY(0)',offset:1}),
          ]))
        ])
    ]), 
    trigger("tech",[
      transition("void => *",[
        animate('0.5s 100ms ease-in',keyframes([
          style({opacity:0,transform:'translateX(-30px)',offset:0}),
          style({opacity:1,transform:'translateX(0)',offset:1})
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  technologies:any[]=[
    {name:"Express Backend",description:"A rock solid NodeJS/Express server using Monoose to rrganize models and query the database"},
    {name:"Angular-CLI",description:"Angular-CLI to generate components, services and more. Local dev server and easy compilation"},
    {name:"JWT Tokens",description:"Full featured authentication using JSON web tokens. Login and store user data"},
  ];
  staggeringTechnologies:any[]=[];

  constructor(private _authService:AuthService) { 
    
  }

  ngOnInit() {
    setTimeout(()=> {
        this.doNext(0);  
    }, 1000);
  }

  doNext(i){
    if(this.staggeringTechnologies.length < this.technologies.length){
        this.staggeringTechnologies.push(this.technologies[i]);
    }
  }

}
