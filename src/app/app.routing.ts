import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {RegisterComponent} from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { ChComponent } from './register/ch/ch.component';
import { CaComponent } from './register/ca/ca.component';
import { ClComponent } from './register/cl/cl.component';
import { CllandingComponent } from './cllanding/cllanding.component';
import { ClregComponent } from './register/clreg/clreg.component';
import { GetaccoComponent } from './getacco/getacco.component';
import { CheckinhomeComponent } from './checkin/checkinhome/checkinhome.component';
import { RegComponent } from './checkin/reg/reg.component';
import { ProfileComponent } from './checkin/profile/profile.component';
import { CheckinComponent } from './checkin/checkin.component';

const routes: Routes =[
  
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'cl',
    component: CllandingComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    children:[
      {
        path: '',
        component: ClComponent
      },
      {
        path: 'ca',
        component: CaComponent
      },
      {
        path: 'ch',
        component: ChComponent
      },
      {
        path: 'clreg',
        component: ClregComponent
      },
    ]
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 

  {
    path: 'getacco',
    component: GetaccoComponent,
  },
  {
    path: 'checkin',
    component: CheckinComponent,
    children: [
      { path: '', component: CheckinhomeComponent },
      { path: 'reg', component: RegComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
