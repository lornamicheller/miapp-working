import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import Parse from 'parse';
import { ProviderService } from "./../provider.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

let parse = require('parse');

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})

export class InsurancePage implements OnInit {

  insurance : string

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, public provider: ProviderService) { }

  ngOnInit() {

    console.log(this.provider.bday)
  }

  openPage() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/profile-picture");
  }

  openPage2() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/profile-picture");
  }
  


  goBack() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/birthday");
  }

}
