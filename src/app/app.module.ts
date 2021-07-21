import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCh2IyFHmXjH853uMCjZ_uGbJoBaRJ_kdU",
      authDomain: "fir-angular-auth-aa254.firebaseapp.com",
      projectId: "fir-angular-auth-aa254",
      storageBucket: "fir-angular-auth-aa254.appspot.com",
      messagingSenderId: "803562779164",
      appId: "1:803562779164:web:bbe2d2555a768043a325d9"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
