import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'my-auth-token',

  })
}
declare const gapi: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private transfereService:DataService,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _ngZone: NgZone
  ) { }

  public gID: number;
  public name: string;
  public imageURL: string;
  public email: string;

  public profileurl: string;
  private url: string = "https://api2.moodi.org/ccpuser";

  
  public auth2:any;
  public googleInit(){
    gapi.load('auth2',()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '511498944970-b2g59f8sj5h2c20vhkim5tkrpcn9sckc.apps.googleusercontent.com',
        scope: 'profile'
      });
      this.attachSignin(document.getElementById('button'));
    });
  }

  public attachSignin(element){
    this.auth2.attachClickHandler(element, {},
      (googleUser)=> {
        let profile=googleUser.getBasicProfile();
        this.gID=profile.getId();

        this.transfereService.setJdataTemp(JSON.stringify({
          'name':profile.getName(),
          'email':profile.getEmail(),
          'uid':profile.getId(),
          'image':profile.getImageUrl(),
        }) );
        this.profileurl=profile.getImageUrl();
        this.name= profile.getName();
        this.imageURL=profile.getImageUrl();
        this.email=profile.getEmail();
        this.onClick();
      });
  } 

  onClick(){
    this.http.get(this.url+'/'+this.email+"/")
      .subscribe(
        // data => this.router.navigate(['profile'],{relativeTo: this.activatedRoute.parent}),
        data => {
          // console.log(data),
          this.transfereService.setJdata(
            JSON.stringify({
            'name':data['name'],
            'email':data['email'],
            'uid':data['google_id'],
            'mobile':data['mobile_number'],
            'mi_no':data['mi_number'],
            'image':this.profileurl,
  
          }))
          this.http.put("https://api2.moodi.org/ccpuser/"+this.email+"/",{
            name: data['name'],
            mobile_number: data['mobile_number'],
            year_of_study: data['year_of_study'], 
            gender:data['gender'],
            type1:data['type1'],
            fb_id:this.gID,
            facebook_id:data['facebook_id'],
            email:this.email,
            present_city:data['present_city'],
            profileurl:this.profileurl,
            present_college:data['present_college'],

    },httpOptions).subscribe(result =>{},
      data => {},
      () => {})
      
          this._ngZone.run(() => this.router.navigate(['/dashboard'],{relativeTo: this.activatedRoute.parent}));
        },
        error => {
          this._ngZone.run(() => this.router.navigate(['/register/'+this.Link], {relativeTo: this.activatedRoute.parent}));
                  }
        )
  }
Link;
  login(){
    this.Link='ch'
    document.getElementById('button').click();
  }
  loginCA(){
    this.Link='ca'
    document.getElementById('button').click();
  }

  ngAfterViewInit(){
    this.googleInit();
  }

  status=true;

  profile(){

    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit() {
    
    if(localStorage.getItem("jdata")===null){
      this.status=false;
    }
  }

}
