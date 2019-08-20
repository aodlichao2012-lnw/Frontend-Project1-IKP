import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
//import { CertComponent } from './cert/cert.component';
//import { ResultComponent } from './result/result.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
//import { MyCertComponent } from './result/my-cert/my-cert.component';
//import { Result2Component } from './result/result2/result2.component';
//import { DetailComponent } from './cert/detail/detail.component';
//import { TypeComponent } from './cert/type/type.component';
//import { TimeComponent } from './cert/time/time.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TestComponent,
//    CertComponent,
  //  ResultComponent,
    TutorialComponent,
    ProfileComponent,
    DashboardComponent,
    PostComponent,
   // MyCertComponent,
   // Result2Component,
//    DetailComponent,
  //  TypeComponent,
  //  TimeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
