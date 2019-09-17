import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})

export class DoctorsPage implements OnInit {

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

  openPage() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/doctors-profile");
}

goBack() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/specialty");
}
}
