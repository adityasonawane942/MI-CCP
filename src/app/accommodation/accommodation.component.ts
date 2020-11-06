import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import $ from 'jquery'
declare var $;

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  constructor(
    private transfereService:DataService,
    private http: HttpClient,) { }

    baseusl="https://api2.moodi.org/";
    cldata;
    uid= JSON.parse(this.transfereService.getJdataTemp()).uid;
    mi_id=JSON.parse(this.transfereService.getJdata()).mi_no;
    uid2;
    members_added:any[];
    uid3;
    showDropDownClg = false;
    showDropDownGen = false;
    showDropDownCys = false;
    form = new FormGroup({});
    // members_added2:any[];
    college;
    pop=false;
    data;

    people=[];


    toggleDropDownClg() {
      if (this.showDropDownClg) {
      } else {
        this.showDropDownClg = !this.showDropDownClg;
      }
    }
    closeDropDownClg() {
      this.showDropDownClg = false;
    }

    process(clg){
      this.http.get("https://api2.moodi.org/contingent/search/"+clg)
                    .subscribe(
                      data => {
                        // console.log("wefqwefwefwrdfwefqwefrqwe")
                        // this.uid3=data["leader"];
                        console.log(data);
                        this.pop=true;
                        this.data=data;
                        // document.getElementById("cl_data").innerHTML=
                        
                        // this.members_added=data["members"];

                      },
                      error => {
                        this.pop=false;
                        document.getElementById("cl_data").innerHTML="";
                        this.uid3=undefined;
                        
                        console.log(error);
                      }
                      );
                      
    }

    selectValueClg(value) {
      this.college = value;
      this.showDropDownClg = false;
      this.process(value);
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




    public add_member(number){
      console.log(number)
      this.http.get('https://api2.moodi.org/contingent/'+this.uid+"/add/"+number+"/addedby/cl")
        .subscribe(result =>{

          this.get_data();
        // this.my_team(eventid)},
        console.log(result)},
        data => {
          console.log(data)
          alert(data["error"])
          },
          () => {
          }
        ); 
      
    }


    public update(number){
      this.http.get('https://api2.moodi.org/contingent/'+this.uid+"/update/"+number)
      .subscribe(result =>{
      // this.my_team(eventid)},
      console.log(result);
    this.get_data();
  },
      data => {
        
        console.log(data)
        alert(data["error"])
        },
        () => {
        }
      ); 
    }

    public freeze(number){
      var mal=0;
        var fem=0;
        var gen=null;
        // var data=this.uid2;
      for (let i of this.members_added){
        if (i["approved"] || i["approvedbymi"]){
          // console.log("hihihihihi",i['user']['gender'].toUpperCase());
          if(i['user']['gender'].toLowerCase()=="male"){
            mal=mal+1;
          }else{
            fem=fem+1;
          }
        }else{
          if(i["user"]["mi_number"]==number){
            gen=i["user"]["gender"].toLowerCase();
          }
        }

      }

      
      if(gen=="male"){
                if(mal<this.uid2["male_cap"]){

                  this.http.get('https://api2.moodi.org/contingent/'+this.uid+"/approve/"+number)
                      .subscribe(result =>{
                      // this.my_team(eventid)},
                      console.log(result);
                    this.get_data();
                  },
                      data => {
                        
                        console.log(data)
                        alert(data["error"])
                        },
                        () => {
                        }
                      ); 
              }else{
                alert("Male Upper Limit Reached!!");
                
              }
            }else{
              if(fem<this.uid2["female_cap"]){

                this.http.get('https://api2.moodi.org/contingent/'+this.uid+"/approve/"+number)
                    .subscribe(result =>{
                    // this.my_team(eventid)},
                    console.log(result);
                  this.get_data();
                },
                    data => {
                      
                      console.log(data)
                      alert(data["error"])
                      },
                      () => {
                      }
                    ); 
            }else{
              alert("Female Upper Limit Reached!!");
              
            }
            }
          }

    public unfreeze(number){
      this.http.get('https://api2.moodi.org/contingent/'+this.uid+"/unapprove/"+number)
                      .subscribe(result =>{
                      // this.my_team(eventid)},
                      console.log(result);
                    this.get_data();
                  },
                      data => {
                        
                        console.log(data)
                        alert(data["error"])
                        },
                        () => {
                        }
                      ); 
      }
  //     
  //   }

    public add_member2(){
      console.log(this.mi_id);
      this.http.get('https://api2.moodi.org/contingent/'+this.data["fb_id"]+"/add/"+this.mi_id+"/addedby/notcl")
        .subscribe(result =>{
        // this.my_team(eventid)},
        console.log(result);
      this.get_data();
    },
        data => {
          
          console.log(data)
          alert(data["error"])
          },
          () => {
          }
        ); 
      
    }

    public remove(number){
      console.log(number)
      this.http.get('https://api2.moodi.org/contingent/'+this.uid+"/remove/"+number)
        .subscribe(result =>{
        // this.my_team(eventid)},
        console.log(result)
        this.get_data();},
        data => {
          console.log(data)
          alert(data)
          },
          () => {
          }
        ); 
     
    }

    public exit(number){
      console.log(number)
      this.http.get('https://api2.moodi.org/contingent/'+this.uid3["fb_id"]+"/remove/"+number)
        .subscribe(result =>{
        // this.my_team(eventid)},
        console.log(result);
        this.get_data();},
        data => {
          console.log(data)
          
          // alert(data)
          },
          () => {
          }
        ); 
      
    }

    

    get_data(){
      this.http.get(this.baseusl+"contingent/"+this.uid)
    .subscribe(
       data => {
         this.uid2=data;
         this.members_added=data["members"];

      },
      error => {
        this.uid2=undefined;
        console.log(123123);
                        this.http.get(this.baseusl+"contingent-info/"+this.uid)
                    .subscribe(
                      data => {
                        console.log("wefqwefwefwrdfwefqwefrqwe")
                        this.uid3=data["leader"];
                        console.log(this.uid3);
        
                        this.members_added=data["members"];

                      },
                      error => {
                        this.uid3=undefined;
                        
                        console.log(error);
                      }
                      )
        
        console.log(error);
      }
      )
    }

    

  ngOnInit() {
    console.log("hello");
    console.log(this.uid);
    console.log("Helo");
   
    

    this.get_data();
    this.http.get('https://api2.moodi.org/collegeslist')
      .subscribe((data: any[]) => {
      this.people = data.map(function(item){
        return item.college_name;
      })
      
    }

      )
      
  }

}
