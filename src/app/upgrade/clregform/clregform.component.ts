import { Component, OnInit } from '@angular/core';
  // import {saveAs as importedSaveAs} from "file-saver";
  import { Router, ActivatedRoute } from '@angular/router';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import * as $ from 'jquery';
  import { DataService } from '../../data.service';
  
  import { DownloadfileService } from '../downloadfile.service';
  @Component({
    selector: 'app-clregform',
    templateUrl: './clregform.component.html',
    styleUrls: ['./clregform.component.scss']
  })
  export class ClregformComponent implements OnInit {
  
    constructor(
      private transfereService:DataService,
      private http: HttpClient,
      private router: Router,
      private api_service:DownloadfileService
      ) { }
  
    ngOnInit() {
      this.http.get("https://api2.moodi.org/ccpuser"+'/'+this.email+"/")
      .subscribe(
         data => {this.data=data},
        error => {}
        )
      $("#imageUpload").change(function() {
        readURL(this);
    });
    }
    exportPdf() {
      // this.api_service.export().subscribe(data => saveAs(data, `CL_NOL_Format_2019.docx`));
  }
  file;
  formData = new FormData();

  onChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
      this.formData.append('noc_img', this.file);
    }
  }

  email= JSON.parse(this.transfereService.getJdataTemp()).email
  data;
  popup;
  num;
  type;
  submit(){
    
    this.num=this.data['referred_no_CH']+this.data['referred_no_CA']
    // if(this.num<3){

    //   this.popup=`Get all the 3 Assistant CL registered as College Head/Associate on ccp.moodi.org using your referral ID: `+this.data.referral_code+`<br><i>(if any of them have already registered then, make other individuals registered using your referral id(at least 3) to activate your submit button)</i>
    //   <br>Current Count: `+this.num
    //   var x = document.getElementById("snackbar");
    //   x.className = "show";
    //   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    //   return
    // }
    if(this.file==null){
      this.popup=`Please Upload NOL`
      var x = document.getElementById("snackbar1");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return
  }

    if(this.data['type1']=='CLN'||this.data['type1']=='CL')
    this.type=this.data['type1']
    else
    this.type='CLN'

    this.formData.append( 'name' , this.data['name'])
    this.formData.append( 'mobile_number' , this.data['mobile_number'])
    this.formData.append( 'year_of_study' , this.data['year_of_study'])
    this.formData.append( 'gender' , this.data['gender'])
    this.formData.append( 'type1' , this.type)
    this.formData.append( 'fb_id' , this.data['fb_id'])
    this.formData.append( 'facebook_id' , this.data['facebook_id'])
    this.formData.append( 'email' , this.data['email'])
    this.formData.append( 'present_city' , this.data['present_city'])
    this.formData.append( 'profileurl' , this.data['profileurl'])
    this.formData.append( 'present_college' , this.data['present_college'])

    // this.http.post<any>("https://api2.moodi.org/ccpuser/blog",
    this.http.put("https://api2.moodi.org/ccpuser/"+this.email+"/",
    this.formData)
    .subscribe(result =>
      {
        this.router.navigateByUrl('upgrade/clstatus');},
      data => {
        console.log(data)
      },
      () => {
      })
  }
  
  }

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+reader.result+')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }