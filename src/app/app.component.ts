import { Component } from '@angular/core';
import {Form,Validators,FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public form :FormGroup;


  constructor (private fb: FormBuilder) {
    this.form = this.fb.group({
      name:['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.required
      ])],
      about:['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])],
      message:['',Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(300),
        Validators.required
      ])]
    })
  }



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
