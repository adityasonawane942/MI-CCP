import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from "../data.service";

import { ActivatedRoute, Router } from "@angular/router";
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: '/dashboard', title: 'Home',  icon: 'pe-7s-home', class: '' },
  // { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  // { path: '/leaderboard', title: 'Leaderboard',  icon:'pe-7s-note2', class: '' },
  // { path: '/guidelines', title: 'Guidelines',  icon:'pe-7s-news-paper', class: '' },
  // { path: '/ideation', title: 'Ideation',  icon:'pe-7s-light', class: '' },
  // { path: '/notifications', title: 'Contact Us',  icon:'pe-7s-users', class: '' },
  // { path: '/events', title: 'Events',  icon:'pe-7s-volume1', class: '' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html"
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  email;
  ccpreg;
  mainreg;
  constructor(
    private router: Router,
    private http: HttpClient,
    private profile: DataService
  ) {}

  profiledata;

  ngOnInit() {
    try {
      this.email = JSON.parse(this.profile.getJdata()).email;
      this.ccpreg = true;
    } catch (error) {
      this.ccpreg = false;
    }
    try {
      this.email = JSON.parse(this.profile.getmaindata()).email;
      this.mainreg = true;
      console.log("here");
    } catch (error) {
      this.mainreg = false;
    }
    console.log(this.mainreg);
    console.log(this.ccpreg);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if (this.ccpreg) {
      this.http
        .get("https://api2.moodi.org/ccpuser/" + this.email + "/")
        .subscribe((data: any[]) => {
          this.profiledata = data;
        });
    }
  }
  logout() {
    localStorage.clear();
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return false;
  }
}
