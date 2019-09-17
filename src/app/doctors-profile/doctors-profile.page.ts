import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-doctors-profile',
  templateUrl: './doctors-profile.page.html',
  styleUrls: ['./doctors-profile.page.scss'],
})
export class DoctorsProfilePage implements OnInit {

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

//   openPage() {
//     let options: NativeTransitionOptions = {
//   duration: 100,
//   iosdelay: 100
//  }

// console.log(options);
// this.nativePageTransitions.fade(options);
//     this.navigate.navigateRoot("/appointment");
// }

// goBack() {
//     let options: NativeTransitionOptions = {
//   duration: 100,
//   iosdelay: 100
//  }

// console.log(options);
// this.nativePageTransitions.fade(options);
//     this.navigate.navigateRoot("/doctors");
// }
}
