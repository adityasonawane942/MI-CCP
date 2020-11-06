import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LandingComponent } from './landing/landing.component';

import { RegisterComponent } from './register/register.component';
import { CollegelistPipe } from './register/collegelist.pipe';
import { ChComponent } from './register/ch/ch.component';
import { CaComponent } from './register/ca/ca.component';
import { ClComponent } from './register/cl/cl.component';
import { CllandingComponent } from './cllanding/cllanding.component';
import { ClregComponent } from './register/clreg/clreg.component';
import { GetaccoComponent } from './getacco/getacco.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckinhomeComponent } from './checkin/checkinhome/checkinhome.component';
import { RegComponent } from './checkin/reg/reg.component';
import { ProfileComponent } from './checkin/profile/profile.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LandingComponent,
    RegisterComponent,
    CollegelistPipe,
    ChComponent,
    CaComponent,
    ClComponent,
    CllandingComponent,
    ClregComponent,
    GetaccoComponent,
    CheckinComponent,
    CheckinhomeComponent,
    RegComponent,
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
