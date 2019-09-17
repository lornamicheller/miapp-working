import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions, public alertController: AlertController) { }

  ngOnInit() {
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

goHome() {
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
              this.goHome();
              this.navigate.navigateRoot('/checkin-profile');
          }
      }
      ]
  }
  );
  await alert.present();
}

  async arrivedAlert() {
    const alert=await this.alertController.create( {
        header: 'Good!', message: 'Jane Doe, thank you for letting us know that you have arrived to your appointment. Your doctor will be notified.', buttons: [ {
            text: 'OK', handler: () => {
                console.log('Confirm Cancel');
                this.goHome();
                this.navigate.navigateRoot("/user-home");
            }
        }
        ]
    }
    );
    await alert.present();
}

  async presentAlert2() {
    const alert=await this.alertController.create( {
        header: 'Jane Doe', message: 'Please confirm your appointment with Dr. John for September 7, 2019 at 9:30AM.', 
        buttons: [ {
            text: 'OK', 
            handler: () => {
                console.log('Confirm Cancel');
                this.goHome();
                this.navigate.navigateRoot("/user-home");
            }
        }
        ]
    }
    );
    await alert.present();
  }

  async confirmLate() {
    const alert = await this.alertController.create({
      header: 'Jane Doe',
      // subHeader: 'Subtitle',
      message: 'Thank you for letting us know! Your doctor will now be notified of your delayed arrival.',
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log('Confirm Cancel');
          this.goHome();
          this.navigate.navigateRoot("/user-home");
      } 
      }]
      
    });

    await alert.present();
  }


  async checkIn() {
    const alert=await this.alertController.create( {
        header: 'Good!', message: 'Check-in complete. Jane Doe, remember to click "I have arrived" when you arrive to your appointment.', buttons: [ {
            text: 'OK', handler: () => {
                console.log('Confirm Cancel');
                this.goHome();
                this.navigate.navigateRoot("/user-home");
            }
        }
        ]
    }
    );
    await alert.present();
  }
}
