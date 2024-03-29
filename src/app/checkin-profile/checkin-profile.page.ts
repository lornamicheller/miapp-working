import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkin-profile',
  templateUrl: './checkin-profile.page.html',
  styleUrls: ['./checkin-profile.page.scss'],
})
export class CheckinProfilePage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions, public alertController: AlertController) { }

  ngOnInit() {
  }

  openPage() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
    }

    console.log(options);
    this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/appointment");
  }

  openPage2() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
    }

    console.log(options);
    this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/appointment");
  }

  openPage3() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
    }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/user-home");
  }

  openPage4() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
    }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/late-screen");
  }

  openCalendar() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
    }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/appointment");
  }

  goBack() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
    }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/check-in");
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Good!', message: 'Jane Doe, thank you for letting us know that you have arrived to your appointment. Your doctor will be notified.', buttons: [{
        text: 'OK', handler: () => {
          console.log('Confirm Cancel');
          this.openPage();
          this.navigate.navigateRoot('/user-home');
        }
      }
      ]
    }
    );
    await alert.present();
  }

  async presentCancel() {
    const alert = await this.alertController.create({
      header: 'Jane Doe',
      message: 'Your appointment with Dr. X has been cancelled. Your medical doctor or wellness provider will be notified. Thank you!',
      buttons: [
        {
          text: 'Book New Appointment',
          handler: (blah) => {
            this.openCalendar();
            this.navigate.navigateRoot('/appointment');
          }
        },
        {
          text: 'OK',
          handler: (blah) => {
            this.openPage2();
            this.navigate.navigateRoot('/user-home');
          }
        }
      ]
    });

    await alert.present();
  }

  // async presentAlert2() {
  //   const alert=await this.alertController.create( {
  //       header: 'Cancel', message: 'Are you sure you want to cancel?', buttons: [ {
  //           text: 'OK', handler: () => {
  //               console.log('Confirm Cancel');
  //               this.openPage2();
  //               this.navigate.navigateRoot('/appointment');
  //           }
  //       }
  //       ]
  //   }
  //   );
  //   await alert.present();
  // }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cancel',
      message: 'Are you sure you want to cancel your appointment?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm yes');
            this.presentCancel();
          }
        }
      ]
    });

    await alert.present();
  }

  onChange() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
    }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/user-home");
  }

}
