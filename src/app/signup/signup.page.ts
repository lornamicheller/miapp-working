import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import Parse from 'parse';
import { ProviderService } from "./../provider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


let parse = require('parse');


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email : string
  password : string
  confirmPassword : string
  name : string

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, private provider: ProviderService) { 


    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "YzGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");


  }

  ngOnInit() {

  }

  openPage() {

    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/gender");
  
  }

  goBack() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/signin");
  }

  signUp() {

    this.provider.name = this.name;
    this.provider.email = this.email;
    this.provider.password = this.password;
    this.provider.confirmPassword = this.confirmPassword

  }
}
