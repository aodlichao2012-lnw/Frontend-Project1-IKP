import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//import { TestComponent } from './alltest/test/test.component';
//import { TutorialComponent } from './alltest/tutorial/tutorial.component';
//import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { PostComponent } from './alltest/post/post.component';
//import { SettingComponent } from './profile/setting/setting.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    //TestComponent,
   // TutorialComponent,
  //  ProfileComponent,
    DashboardComponent,
    //PostComponent,
   LoginComponent,
   RegisterComponent
   // HelpacComponent,
  //  SettingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
