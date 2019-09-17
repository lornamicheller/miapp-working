import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CalendarComponent } from "./calendar/calendar.component";
import { SpecialtyComponent } from './specialty/specialty.component';

@NgModule({
  declarations: [AppComponent, CalendarComponent, SpecialtyComponent],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent, CalendarComponent, SpecialtyComponent]
})
  export class AppModule {
  constructor(public statusBar : StatusBar){
  this.statusBar.backgroundColorByHexString('#ffffff');
  }

  
}

