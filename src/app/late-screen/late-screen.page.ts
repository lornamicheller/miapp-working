import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-late-screen',
  templateUrl: './late-screen.page.html',
  styleUrls: ['./late-screen.page.scss'],
})
export class LateScreenPage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions, public alertController: AlertController) { }

  ngOnInit() {
  }

  openPage() {
    let options: NativeTransitionOptions= {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/appointment");
}

goBack() {
  let options: NativeTransitionOptions= {
    duration: 100,
    iosdelay: 100
   }

  console.log(options);
  this.nativePageTransitions.fade(options);
  this.navigate.navigateRoot("/checkin-profile");
}

  async presentAlert() {
    const alert=await this.alertController.create( {
        header: 'Jane Doe, thank you for letting us know!', message: 'Your doctor will now be notified of your delayed arrival.', buttons: [ {
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

}
