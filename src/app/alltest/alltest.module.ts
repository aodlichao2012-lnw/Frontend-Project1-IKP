import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { AlltestComponent } from './alltest.component';
import { TestComponent } from './test/test.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { PostComponent } from './post/post.component';

var route : Routes = 
[
  {
    path: 'alltest',
    component : AlltestComponent,
    children :
    [
      {
        path : 'test',
        component: TestComponent
      },
      {
        path : 'Tutorial',
        component : TutorialComponent
      },
      {
        path : 'post',
        component : PostComponent 
      }
    ]
  }
]  

@NgModule({
  declarations: [
    AlltestComponent,
    TestComponent,
    TutorialComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AlltestModule { }
