import {
  Component,
  OnInit
} from '@angular/core';
import {
  ModalController
} from '@ionic/angular';


@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.scss'],
})
export class SpecialtyComponent implements OnInit {

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}