import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import Parse from 'parse';
import { ProviderService } from "./../provider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from "@ionic/angular";

let parse = require('parse');

@Component({
  selector: 'app-signin', 
  templateUrl: './signin.page.html', 
  styleUrls: ['./signin.page.scss'],
})

export class SigninPage implements OnInit {

  email : string
  password : string
  user : any
  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions, private provider: ProviderService, public alertCtrl: AlertController) {

    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "zGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
  }

  

  ngOnInit() {
    
  }

  openPage() {


    //   let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }

    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/user-home");
  }
  // openPage2() {
  //     let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //     this.navigate.navigateRoot("/signup");
  // }
  // openPage3() {
  //     let options: NativeTransitionOptions = {
    //     duration: 100,
    //   iosdelay: 100
    //  }

    // console.log(options);
    // this.nativePageTransitions.fade(options);
  //     this.navigate.navigateRoot("/forgot-pass");
  // }

  async alert(){
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Correo electrónico / Contraseña inválida.',
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

  login() {

   // this.provider.email = this.email
   // this.provider.password


  Parse.User.logIn(this.email, this.password).then((resp) => {
    console.log('Logged in successfully', resp);
    const currentUser = Parse.User.current(); //usuario actual logged
    this.user = currentUser; //igual a variable global

    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/user-home");
    // Parse.Cloud.run('ifVerified', { userId: Parse.User.current().id }).then((response) => {
    //   if (response) {
    //     this.navigateInicio(); //navegar
    //   }
    //   else{
    //     this.notVerified();

    //   }
    // });
  }, err => {
    console.log('Error logging in', err);
    this.alert();
  });

  }
}