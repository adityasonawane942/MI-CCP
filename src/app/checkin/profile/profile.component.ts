import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'app/data.service';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private profile: DataService,
    private router: Router
  ) { }
  sop;
  name;
  email;
  profiledata;
  mobileno;
  pincode;
  mi_number;
  gID = JSON.parse(this.profile.getmaindata()).uid
  present_city
  present_college
  check


  checkin() {
    this.http.get('https://api2.moodi.org/user/check/' + this.gID).subscribe((data: any[]) => {
      this.getdata();
    });
  }

  ngOnInit() {
    if (this.gID == undefined) {
      this._ngZone.run(() => this.router.navigate(['/checkin'], { relativeTo: this.activatedRoute.parent }));
    }
    $(document).ready(function () {
      $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
          document.getElementById('submit').style.display = "block";
        }
        else if ($(this).prop("checked") == false) {
          document.getElementById('submit').style.display = "none";
        }
      });
    });
    this.getdata();
  }
  getdata() {
    this.http
      .get("https://api2.moodi.org/user" + "/" + this.gID)
      .subscribe((data: any[]) => {
        this.profiledata = data;
        console.log(this.profiledata);
        this.name = data["name"];
        this.email = data["email"];
        this.mi_number = data["mi_number"];
        this.present_city = data["present_city"];
        this.present_college = data["present_college"];
        this.mobileno = data["mobile_number"];
        this.pincode = data["zip_code"];
        this.check = data["checkedin"]
      });
  }

}
