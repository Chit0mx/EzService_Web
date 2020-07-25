import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// firebase libs
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BackGroundComponent } from './components/back-ground/back-ground.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

//services
import { AuthService } from './auth.service';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, BackGroundComponent, LoginFormComponent, Page404Component, LoginComponent],
  imports: [
    //Angular Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Initialize Firebase modules
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    //PWA Modules
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
