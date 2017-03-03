import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-logout-snack-bar',
  template: `
      <p class="stack-bar-components">
          <span class="left-msg">
              You're now logged out
          </span>
          <span class="right-icon logout">
              <md-icon>exit_to_app</md-icon>
          </span>
      </p>
  `,
  styles: [`
      p.stack-bar-components .logout md-icon{
        transform:rotate(-180deg);
      }
  `],
  encapsulation:ViewEncapsulation.None
})
export class LogoutSnackBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
