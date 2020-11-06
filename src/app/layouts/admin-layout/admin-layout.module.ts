import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CollegeFestComponent } from '../../icons/college-fest/college-fest.component';
import { CollegeCultComponent } from '../../icons/college-cult/college-cult.component';
import { ArtistComponent } from '../../icons/artist/artist.component';
import { CollegeSecComponent } from '../../icons/college-sec/college-sec.component';
import { ClreghomeComponent } from '../../upgrade/clreghome/clreghome.component';
import { ClregformComponent } from '../../upgrade/clregform/clregform.component';
import { IdeationhomeComponent } from '../../icons/ideationhome/ideationhome.component';
import { EventsComponent } from '../../events/events.component';
import { ClstatusComponent } from '../../upgrade/clstatus/clstatus.component';
import { AccommodationComponent } from '../../accommodation/accommodation.component';
import {CollegelistPipe} from '../../accommodation/collegelist.pipe'
import { from } from 'rxjs';
import { OutsideaccoComponent } from 'app/outsideacco/outsideacco.component';
import { OutsideaccohomeComponent } from 'app/outsideacco/outsideaccohome/outsideaccohome.component';
import { OutsideaccoformComponent } from 'app/outsideacco/outsideaccoform/outsideaccoform.component';
import { PaymentsuccessComponent } from 'app/outsideacco/paymentsuccess/paymentsuccess.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    CollegelistPipe,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    EventsComponent,
    CollegeFestComponent,
    CollegeCultComponent,
    ArtistComponent,
    CollegeSecComponent,
    ClreghomeComponent,
    ClregformComponent,
    ClstatusComponent,
    IdeationhomeComponent,
    AccommodationComponent,
    OutsideaccoComponent,
    OutsideaccohomeComponent,
    OutsideaccoformComponent,
    PaymentsuccessComponent, 
  ]
})

export class AdminLayoutModule {}
