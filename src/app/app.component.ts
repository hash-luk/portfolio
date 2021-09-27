import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  redirect = {
    redirectDevFinance() {
      document.location.href='https://github.com/hash-luk/Dev-Finance';
    },

    redirectMoveIt() {
      document.location.href='https://github.com/hash-luk/Move.it';
    },

    redirectHappy() {
      document.location.href='https://github.com/hash-luk/Happy-NLW-3';
    },

    redirectSpiderMan() {
      document.location.href='https://github.com/hash-luk/SpiderMan-Home-Page';
    },

    redirectPinterestClone() {
      document.location.href='https://github.com/hash-luk/pinterest-ui-clone';
    }
  }
}
