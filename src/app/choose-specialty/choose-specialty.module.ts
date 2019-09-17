import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChooseSpecialtyPage } from './choose-specialty.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseSpecialtyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChooseSpecialtyPage]
})
export class ChooseSpecialtyPageModule {}
