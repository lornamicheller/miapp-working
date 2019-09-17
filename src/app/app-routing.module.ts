import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  }, 
  
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'user-home', loadChildren: './user-home/user-home.module#UserHomePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'forgot-pass', loadChildren: './forgot-pass/forgot-pass.module#ForgotPassPageModule' },
  { path: 'gender', loadChildren: './gender/gender.module#GenderPageModule' },
  { path: 'birthday', loadChildren: './birthday/birthday.module#BirthdayPageModule' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsurancePageModule' },
  { path: 'profile-picture', loadChildren: './profile-picture/profile-picture.module#ProfilePicturePageModule' },
  { path: 'specialty', loadChildren: './specialty/specialty.module#SpecialtyPageModule' },
  { path: 'doctors', loadChildren: './doctors/doctors.module#DoctorsPageModule' },
  { path: 'doctors-profile', loadChildren: './doctors-profile/doctors-profile.module#DoctorsProfilePageModule' },
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'view-appointment', loadChildren: './view-appointment/view-appointment.module#ViewAppointmentPageModule' },
  { path: 'appointment-details', loadChildren: './appointment-details/appointment-details.module#AppointmentDetailsPageModule' },
  { path: 'manage', loadChildren: './manage/manage.module#ManagePageModule' },
  { path: 'edit-appointment', loadChildren: './edit-appointment/edit-appointment.module#EditAppointmentPageModule' },
  { path: 'check-in', loadChildren: './check-in/check-in.module#CheckInPageModule' },
  { path: 'checkin-profile', loadChildren: './checkin-profile/checkin-profile.module#CheckinProfilePageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'choose-specialty', loadChildren: './choose-specialty/choose-specialty.module#ChooseSpecialtyPageModule' },
  { path: 'late-screen', loadChildren: './late-screen/late-screen.module#LateScreenPageModule' },
  { path: 'modify-appointment', loadChildren: './modify-appointment/modify-appointment.module#ModifyAppointmentPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
