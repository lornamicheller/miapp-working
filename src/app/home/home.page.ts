import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import Parse from 'parse';
import { ProviderService } from "./../provider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

let parse = require('parse');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public NavCtrl:NavController, public nativePageTransitions: NativePageTransitions, private provider: ProviderService) { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "zGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
  }

  ngOnInit() {
    setTimeout(() => {this.goHome();},4200);
    console.log("working");
  }

  goHome() {
    Parse.User.currentAsync().then(user => {
      console.log('Logged user', user);
  
      user != null ? this.NavCtrl.navigateRoot('/user-home') : this.NavCtrl.navigateRoot('/tutorial');
    }, err => {
      console.log('Error getting logged user',err);
      let options: NativeTransitionOptions = {
        direction: 'left',
        duration: 200,
        slowdownfactor: -1,
        slidePixels: 20,
        iosdelay: 100, 
        androiddelay: 100,
       }
      });
   // this.NavCtrl.navigateRoot("/tutorial");
  }
}
