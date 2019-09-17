import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import Parse from 'parse';
import { ProviderService } from "./../provider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from "@ionic/angular";


let parse = require('parse');


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, public alertCtrl: AlertController) { 

    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "zGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
  }

  ngOnInit() {
  }

  goBack() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/user-home");
}

async alert(){
  const alert = await this.alertCtrl.create({
    header: 'Error',
    message: 'Ha ocurrido un error!',
    buttons: [{
      text: 'OK',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Confirm Cancel');
        //this.popController.dismiss();
        //this.nav.navigateRoot("/sidemenu");
      }
    }]
  });

  await alert.present();
}

logout() {
  let options: NativeTransitionOptions = {
   
      duration: 100, 
      iosdelay: 100
  }

  Parse.User.logOut().then((resp) => {
    console.log('Logged out successfully', resp);

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/signin");
  }, err => {
    console.log('Error logging out', err);
    this.alert
  })
 
}

openPage2() {
  let options: NativeTransitionOptions = {
    duration: 100,
    iosdelay: 100
   }

  console.log(options);
  this.nativePageTransitions.fade(options);
  this.navigate.navigateRoot("/edit");
}

}
