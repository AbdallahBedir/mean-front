import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-login-snack-bar',
  template: `
     <p class="stack-bar-components">
          <span class="left-msg">
              You're now logged In
          </span>
          <span class="right-icon">
              <md-icon>exit_to_app</md-icon>
          </span>
      </p>
  `,
  styles: [],
  encapsulation:ViewEncapsulation.None
})
export class LoginSnackBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
