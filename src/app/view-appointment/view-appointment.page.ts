import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.page.html',
  styleUrls: ['./view-appointment.page.scss'],
})
export class ViewAppointmentPage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

//   openPage() {
// //     let options: NativeTransitionOptions = {
//   duration: 100,
//   iosdelay: 100
//  }

// console.log(options);
// this.nativePageTransitions.fade(options);
//     this.navigate.navigateRoot("/appointment-details");
// }
  // goBack() {
  //     let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //     this.navigate.navigateRoot("/user-home");
  // }

}
