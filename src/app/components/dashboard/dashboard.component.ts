import { Component, OnInit ,trigger,state,style,
         transition, animate,keyframes} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations:[
    trigger("dashboardwrapper",[
      transition("void => *",[
        animate('0.7s 0.2s ease-in',keyframes([
          style({opacity:0,transform:'translate(-65%, -50%)',offset:0}),
          style({opacity:1,transform:'translate(-50%, -50%)',offset:1})
        ]))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

}

