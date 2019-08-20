import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CertComponent } from './cert.component';
import { DetailComponent } from './detail/detail.component';
import { TypeComponent } from './type/type.component';
import { TimeComponent } from './time/time.component';

var routes: Routes = [
  {
    path: 'Cert',
    component: CertComponent,
    children: [
      {
        path: 'Detail',
        component: DetailComponent
      },
      {
        path: 'time',
        component:TimeComponent
      },
      {
        path : 'type',
        component:TypeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [CertComponent, DetailComponent , TimeComponent , TypeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CertModule { }
