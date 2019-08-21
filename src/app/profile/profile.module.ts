import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { SettingComponent } from './setting/setting.component';
import { HelpacComponent } from './helpac/helpac.component';



var routes : Routes = 
[
  {
    path: 'Profile',
    component : ProfileComponent,
    children :
    [
        {
          path : 'set',
          component : SettingComponent
        },
        {
          path : 'helpac',
          component : HelpacComponent
        },
      
    ]
  }
]

@NgModule({
  declarations: [
    ProfileComponent,
    SettingComponent,
    HelpacComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class ProfileModule { }
