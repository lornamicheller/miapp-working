import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from "./../calendar/calendar.component";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modify-appointment',
  templateUrl: './modify-appointment.page.html',
  styleUrls: ['./modify-appointment.page.scss'],
})
export class ModifyAppointmentPage implements OnInit {

  constructor(public navigate: NavController, public nativePageTransitions: NativePageTransitions, public modalCtrl: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  openPage() {
    let options: NativeTransitionOptions= {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
  //   this.navigate.navigateRoot("/user-home");
}
goBack() {
    let options: NativeTransitionOptions= {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/edit-appointment");
}
async openDatePicker() {
    const datePickerModal=await this.modalCtrl.create( {
        component: CalendarComponent, //cssClass: 'li-ionic4-datePicker',
        //componentProps: { 'objConfig': this.datePickerObjPtBr }
    }
    );
    await datePickerModal.present();
    // datePickerModal.onDidDismiss()
    //   .then((data) => {
    //     // this.isModalOpen = false;
    //     console.log(data);
    //     this.selectedDate = data.data.date;
    //   });
}

//   formatAMPM(date) {
// 	  var hours = date[0];
// 	  var minutes = date[1];
// 	  var ampm = hours >= 12 ? 'pm' : 'am';
// 	  hours = hours % 12;
// 	  hours = hours ? hours : 12;
// 	  minutes = minutes < 10 ? '0'+minutes : minutes;
// 	  var strTime = hours + ':' + minutes + ' ' + ampm;
// 	  return strTime;
// }

async presentAlert() {
  const alert=await this.alertController.create( {
      header: 'Good!', message: 'Thanks, Jane Doe! Your appointment has been booked for May 14 at 11:00AM.', buttons: [ {
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
