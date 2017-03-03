import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  template: `
      <p class="stack-bar-components">
          <span class="left-msg">
              You're registered correctly
          </span>
          <span class="right-icon">
              <md-icon>check_box</md-icon>
          </span>
      </p>
  `,
  styles: [],
  encapsulation:ViewEncapsulation.None
})
export class RegisterSnackBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
