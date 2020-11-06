import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',

  })
}

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  people1 = ['Indian Institute of Tech Bombay', 'Indian Institute of Tech Delhi', 'Indian Institute of Tech Kanpur', 'IIIT Pune', 'Bits Pilani'];
  people = [];
  genders = ['Male', 'Female', 'Other'];
  years = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  showDropDownClg = false;
  showDropDownGen = false;
  showDropDownCys = false;

  chosengender
  college
  name = JSON.parse(this.transfereService.getJdataTemp()).name
  email = JSON.parse(this.transfereService.getJdataTemp()).email
  uid = JSON.parse(this.transfereService.getJdataTemp()).uid
  mobile
  city
  pin
  year
  constructor(

    private _ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private transfereService: DataService,
    private router: Router) { }


  form = new FormGroup({});

  ngOnInit() {
    if (this.uid == undefined) {
      this._ngZone.run(() => this.router.navigate(['/checkin'], { relativeTo: this.activatedRoute.parent }));
    } else {

      this.http.get('https://api2.moodi.org/collegeslist')
        .subscribe((data: any[]) =>
          this.people = data.map(function (item) {
            return item.college_name;
          },

            console.log(this.people)
          ))


    }

  }
  toggleDropDownClg() {
    if (this.showDropDownClg) {
    } else {
      this.showDropDownClg = !this.showDropDownClg;
    }
  }
  closeDropDownClg() {
    this.showDropDownClg = false;
  }
  selectValueClg(value) {

    console.log("value")
    console.log(value)
    this.college = value;
    this.showDropDownClg = false;
  }

  toggleDropDownGen() {
    if (this.showDropDownGen) {
    } else {
      this.showDropDownGen = !this.showDropDownGen;
    }
  }
  closeDropDownGen() {
    this.showDropDownGen = false;
  }

  toggleDropDownCys() {
    if (this.showDropDownCys) {
    } else {
      this.showDropDownCys = !this.showDropDownCys;
    }
  }
  closeDropDownCys() {
    this.showDropDownCys = false;
  }
  selectValueCys(value) {

    console.log("value")
    console.log(value)
    this.year = value;
    this.showDropDownCys = false;
  }

  printAll() {

  }
  selectValueGen(value) {
    this.chosengender = value;
    this.showDropDownGen = false;
  }

  createuser() {
    // console.log(this.chosengender + this.city +this.college+this.mobile)
    this.http.post("https://api2.moodi.org/user/create",
      {
        name: this.name,
        mobile_number: this.mobile,
        year_of_study: this.year,
        gender: this.chosengender,
        zip_code: this.pin,
        google_id: this.uid,
        email: this.email,
        present_city: this.city,
        present_college: this.college,
        postal_address: 'NotMulticity',
        dob: "111",
        cr_referral_code: '',
        status: "reg"
      }, httpOptions)
      .subscribe(result => {
        this.transfereService.setmaindata(
          JSON.stringify({
            'name': this.name,
            'email': this.email,
            'uid': this.uid,
            'mobile': this.mobile,
            'mi_no': result['mi_number']

          }))
        this._ngZone.run(() => this.router.navigate(['/checkin/profile'], { relativeTo: this.activatedRoute.parent }));
        // console.log(result)
        console.log("done")
      },
        data => {
          console.log(data)
          alert(JSON.stringify(data["error"]))
        },
        () => {
        })
  }

}
