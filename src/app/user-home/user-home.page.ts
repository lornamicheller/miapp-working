import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})

export class UserHomePage implements OnInit {

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, private statusBar: StatusBar) { }

  ngOnInit() {
  }

  // openPage() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/specialty");
  // }

  // openPage2() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/view-appointment");
  // }

  // openPage3() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/manage");
  // }

  // openPage4() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/check-in");
  // }

  openNotifications() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/notification");
  }

  // openProfile() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/account");
  // }

  
}
