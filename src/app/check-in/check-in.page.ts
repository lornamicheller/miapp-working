import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit {

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
    // this.navigate.navigateRoot("/checkin-profile");
}
  goBack() {
      let options: NativeTransitionOptions = {
        duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
      this.navigate.navigateRoot("/user-home");
  }

  async presentAlert() {
    const alert=await this.alertController.create( {
        header: 'Good!', message: 'Check-in complete. Jane Doe, remember to click "I have arrived" when you arrive to your appointment.', buttons: [ {
            text: 'OK', handler: () => {
                console.log('Confirm Cancel');
                this.openPage();
                this.navigate.navigateRoot('/checkin-profile');
            }
        }
        ]
    }
    );
    await alert.present();
  }

}
