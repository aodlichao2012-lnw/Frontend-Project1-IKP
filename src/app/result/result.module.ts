import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router'

import { ResultComponent } from './result.component';
import { MyCertComponent } from './my-cert/my-cert.component';
import { Result2Component } from './result2/result2.component';
import { combineLatest } from 'rxjs';

var routes : Routes = 
[
  {
    path: 'result',
    component : ResultComponent,
    children :
    [
      {
        path : 'my-cert',
        component: MyCertComponent
      },
      {
        path : 'result2',
        component : Result2Component
      }
    ]
  }
]


@NgModule({
  declarations: [ResultComponent,Result2Component,MyCertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class ResultModule { }
