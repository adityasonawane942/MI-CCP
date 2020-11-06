import { Routes } from "@angular/router";

import { HomeComponent } from "../../home/home.component";
import { UserComponent } from "../../user/user.component";
import { TablesComponent } from "../../tables/tables.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { ClreghomeComponent } from "app/upgrade/clreghome/clreghome.component";
import { ClregformComponent } from "app/upgrade/clregform/clregform.component";
import { CollegeFestComponent } from "app/icons/college-fest/college-fest.component";
import { CollegeCultComponent } from "app/icons/college-cult/college-cult.component";
import { CollegeSecComponent } from "app/icons/college-sec/college-sec.component";
import { ArtistComponent } from "app/icons/artist/artist.component";
import { IdeationhomeComponent } from "app/icons/ideationhome/ideationhome.component";
import { EventsComponent } from "app/events/events.component";
import { ClstatusComponent } from "app/upgrade/clstatus/clstatus.component";
import { AccommodationComponent } from "app/accommodation/accommodation.component";
import { OutsideaccoComponent } from "app/outsideacco/outsideacco.component";
import { OutsideaccohomeComponent } from "app/outsideacco/outsideaccohome/outsideaccohome.component";
import { OutsideaccoformComponent } from "app/outsideacco/outsideaccoform/outsideaccoform.component";
import { PaymentsuccessComponent } from "app/outsideacco/paymentsuccess/paymentsuccess.component";
export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: HomeComponent },
  { path: "user", component: UserComponent },
  { path: "leaderboard", component: TablesComponent },
  { path: "guidelines", component: TypographyComponent },
  { path: "events", component: EventsComponent },
  {
    path: "ideation",
    component: IconsComponent,
    children: [
      { path: "", component: IdeationhomeComponent },
      { path: "fest", component: CollegeFestComponent },
      { path: "cult", component: CollegeCultComponent },
      { path: "sec", component: CollegeSecComponent },
      { path: "artist", component: ArtistComponent }
    ]
  },
  {
    path: "outsideacco",
    component: OutsideaccoComponent,
    children: [
      { path: "", component: OutsideaccohomeComponent },
      { path: "sacasacscascscdsrr", component: OutsideaccoformComponent },
      { path: "pasd2ccd52dc5s2sd56cdid", component: PaymentsuccessComponent }
    ]
  },
  { path: "accommodation", component: AccommodationComponent },
  { path: "notifications", component: NotificationsComponent },
  {
    path: "upgrade",
    component: UpgradeComponent,
    children: [
      { path: "", component: ClreghomeComponent },
      { path: "clregform", component: ClregformComponent },
      { path: "clstatus", component: ClstatusComponent }
    ]
  }
];
