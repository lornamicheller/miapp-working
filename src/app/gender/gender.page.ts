import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import Parse from 'parse';
import { ProviderService } from "./../provider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

let parse = require('parse');

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  gender : string
  red : string = "red"
  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, public provider: ProviderService) { 

    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "YzGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
  }

  ngOnInit() {

    console.log(this.provider.email)
    console.log(this.provider.gender)
  }

  // openPage() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/birthday");
  // }

  // goBack() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/signup");
  // }

  test(){


    console.log(this.gender)
  }



}
