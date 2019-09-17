import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import Parse from 'parse';
import { ProviderService } from "./../provider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from "@ionic/angular";

let parse = require('parse');

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  email: string
  message: string
  title: string
  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, public alertCtrl: AlertController) { 

    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "zGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
  }

  ngOnInit() {
  }

  openPage() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

      Parse.User.requestPasswordReset(this.email).then(() => {
        // Password reset request was sent successfully
        if (typeof document !== 'undefined')
        console.log('Reset password email sent successfully');
        this.message = 'Reset password email sent successfully';
        this.title = 'Success'
        console.log(options);
        this.alert();
        // this.nativePageTransitions.fade(options);
        // this.navigate.navigateRoot("/signin");
      }).catch((error) => {
        if (typeof document !== 'undefined')
        this.message = 'Error while creating request to reset user password';
        this.title = 'Error'
        this.alert();
        console.error('Error while creating request to reset user password', error);
      })
    

   
  }

  async alert(){
    const alert = await this.alertCtrl.create({
      header: this.title,
      message: this.message,
      buttons: [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          let options: NativeTransitionOptions = {
            duration: 100,
            iosdelay: 100
           }
          this.nativePageTransitions.fade(options);
          this.navigate.navigateRoot("/signin");
          console.log('Confirm Cancel');
          //this.popController.dismiss();
          //this.nav.navigateRoot("/sidemenu");
        }
      }]
    });
  
    await alert.present();
  }

  openPage2() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/signup");
  }

  // goBack() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/signin");
  // }

}
