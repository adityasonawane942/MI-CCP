import { Component,NgZone, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NG_VALIDATORS,Validator,  Validators,AbstractControl,ValidatorFn } from '@angular/forms';
// import { DataService } from '../data.service';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'my-auth-token',

  })
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  genders = ['Male', 'Female', 'Other'];
  years = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  showDropDownClg = false;
  showDropDownGen = false;
  showDropDownCys = false;
  form = new FormGroup({});

  name = JSON.parse(this.transfereService.getJdataTemp()).name
  email= JSON.parse(this.transfereService.getJdataTemp()).email
  uid=JSON.parse(this.transfereService.getJdataTemp()).uid
  image=JSON.parse(this.transfereService.getJdataTemp()).image
  people=[];
  chosengender
  college
  mobile
  city
  year
  fbid
  rid
  createuser(){
    // console.log(this.chosengender + this.city +this.college+this.mobile)
    // console.log(this.uid);
    // this.http.post("https://api2.moodi.org/ccpuser/login",

    this.http.post("https://api2.moodi.org/ccpuser/login",
    {
      name: this.name,
      mobile_number: this.mobile,
      year_of_study: this.year, 
      gender:this.chosengender,
      // zip_code:this.pin,
      type1:"CA",
      fb_id:this.uid,
      facebook_id:this.fbid,
      email:this.email,
      present_city:this.city,
      friend_code:this.rid,
      profileurl:this.image,
      
      
      present_college:this.college,
      // postal_address:'NotMulticity',
      // dob:"111",
      // cr_referral_code:'',
      // status:"reg"

    },httpOptions)
    .subscribe(result =>
      {
        this.transfereService.setJdata(
          JSON.stringify({
          'name':this.name,
          'email':this.email,
          'uid':this.uid,
          'mobile':this.mobile,
          'mi_no':result['referral_code']
        }))
        this._ngZone.run(() => this.router.navigate(['dashboard'],{relativeTo: this.activatedRoute.parent}));
      
      },
      data => {
        console.log(data)
      alert(JSON.stringify(data["error"]))
      },
      () => {
      })
  }
  constructor( private _ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private transfereService:DataService,
    // private transfereService:DataService,
    private router:Router) { }

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

  selectValueGen(value) {
    this.chosengender = value;
    this.showDropDownGen = false;
  }



  ngOnInit() {
    // if(this.uid==undefined){
    //   this._ngZone.run(() => this.router.navigate(['/'],{relativeTo: this.activatedRoute.parent}));
    // }else{
      if(this.uid==undefined){
        this._ngZone.run(() => this.router.navigate(['/'],{relativeTo: this.activatedRoute.parent}));
      }else{
        
      this.http.get('https://api2.moodi.org/collegeslist')
      .subscribe((data: any[]) => 
      this.people = data.map(function(item){
        return item.college_name;
      },
      ))
    }


}
}