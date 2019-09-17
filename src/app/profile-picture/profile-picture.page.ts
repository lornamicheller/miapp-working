import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from "@ionic/angular";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.page.html',
  styleUrls: ['./profile-picture.page.scss'],
})
export class ProfilePicturePage implements OnInit {

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions, private camera: Camera) { }

  ngOnInit() {
  }

  openPage() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/user-home");
  }

  goBack() {
    let options: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.fade(options);
    this.navigate.navigateRoot("/insurance");
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData)
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }
}
