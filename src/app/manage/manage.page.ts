import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

//   openPage() {
//     let options: NativeTransitionOptions = {
//   duration: 100,
//   iosdelay: 100
//  }

// console.log(options);
// this.nativePageTransitions.fade(options);
//     this.navigate.navigateRoot("/edit-appointment");
// }
//   goBack() {
//       let options: NativeTransitionOptions = {
//   duration: 100,
//   iosdelay: 100
//  }

// console.log(options);
// this.nativePageTransitions.fade(options);
//       this.navigate.navigateRoot("/user-home");
//   }
}
