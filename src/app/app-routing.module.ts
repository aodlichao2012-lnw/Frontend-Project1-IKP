import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { CertComponent } from './cert/cert.component';
import { CertModule } from './cert/cert.module';
import { ResultComponent } from './result/result.component';
import { ResultModule } from './result/result.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { MyCertComponent } from './result/my-cert/my-cert.component';
import { Result2Component } from './result/result2/result2.component';
import { DetailComponent } from './cert/detail/detail.component';
import { TypeComponent } from './cert/type/type.component';
import { TimeComponent } from './cert/time/time.component';


const routes: Routes = [
  {path: "",redirectTo : "home", pathMatch: "full"},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'About', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Test', component: TestComponent },
//  { path: 'Cert', component: CertComponent },
 // { path: 'Result', component: ResultComponent },
  { path: 'Tutorial', component: TutorialComponent },
  { path: 'Profile', component: ProfileComponent },
  {path: 'Das' , component : DashboardComponent},
  {path: 'post', component : PostComponent},
 // {path: 'MyCert', component : MyCertComponent , outlet: "my" },
 // {path: 'Result2', component : Result2Component , outlet: "re2"},
//  {path: 'Detail', component : DetailComponent , outlet: "Detail"},
 // {path: 'Type', component : TypeComponent , outlet: "Type"},
 // {path: 'Time', component : TimeComponent , outlet: "Time"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CertModule,ResultModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
