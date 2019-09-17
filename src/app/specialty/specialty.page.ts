import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { SpecialtyComponent } from '.././specialty/specialty.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.page.html',
  styleUrls: ['./specialty.page.scss'],
})
export class SpecialtyPage implements OnInit {

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SpecialtyComponent
    });
    return await modal.present();
  }

  // openPage() {
  //   let options: NativeTransitionOptions = {
  //   duration: 100,
  //   iosdelay: 100
  //  }

  // console.log(options);
  // this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/doctors");
  // }

  goBack() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/user-home");
  }

  

}
