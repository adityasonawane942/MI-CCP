import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from "../data.service";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(
    private http: HttpClient,

    private profile: DataService
  ) {}

  name = JSON.parse(this.profile.getJdata()).name;
  email = JSON.parse(this.profile.getJdata()).email;
  mobile = JSON.parse(this.profile.getJdata()).mobile;
  mino = JSON.parse(this.profile.getJdata()).mi_no;
  sop;
  profiledata;
  mobileno;
  pincode;
  instagram_id;
  linkedin_id;
  whatsapp_number;
  college_address;
  dean_mailid;
  facebookid;
  buttonc = false;

  update() {
    this.buttonc = true;
    console.log(this.facebookid);

    this.http
      .put(
        "https://api2.moodi.org/ccpuser/" + this.email + "/",
        {
          name: this.name,
          mobile_number: this.mobileno,
          year_of_study: this.profiledata["year_of_study"],
          gender: this.profiledata["gender"],
          type1: this.profiledata["type1"],
          fb_id: this.profiledata["fb_id"],
          email: this.profiledata["email"],
          present_city: this.profiledata["present_city"],
          profileurl: this.profiledata["profileurl"],
          present_college: this.profiledata["present_college"],
          sop: this.sop,
          pincode: this.pincode,
          facebook_id: this.facebookid,
          instagram_id: this.instagram_id,
          linkedin_id: this.linkedin_id,
          whatsapp_number: this.whatsapp_number,
          college_address: this.college_address,
          dean_mailid: this.dean_mailid
        },
        httpOptions
      )
      .subscribe(
        result => {
          alert("Updated");
          this.buttonc = false;
        },
        data => {
          alert(JSON.stringify(data["error"]));
          this.buttonc = false;
        },
        () => {}
      );
  }
  ngOnInit() {
    this.http
      .get("https://api2.moodi.org/ccpuser/" + this.email + "/")
      .subscribe((data: any[]) => {
        this.profiledata = data;
        console.log(this.profiledata);

        this.facebookid = data["facebook_id"];
        this.mobileno = data["mobile_number"];
        this.instagram_id = data["instagram_id"];
        this.sop = data["sop"];
        this.pincode = data["pincode"];
        this.linkedin_id = data["linkedin_id"];
        this.whatsapp_number = data["whatsapp_number"];
        this.college_address = data["college_address"];
        this.dean_mailid = data["dean_mailid"];
      });
  }
  img =
    ".imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400";
}
