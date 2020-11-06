import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private router:Router,
  ) { }
    
  setcollegedata(data){
    localStorage.setItem('college',data);
  }

  setJdata(data){
    localStorage.setItem('jdata',data);
  }

  getcollegedata(){
    // let temp = this.uid;
    return localStorage.getItem('college')
  }

  getJdata(){
    // let temp = this.uid;
    return localStorage.getItem('jdata')
  }

  setJdataTemp(data){
    localStorage.setItem('jdatatemp',data);
  }

  getJdataTemp(){
    // let temp = this.uid;
    return localStorage.getItem('jdatatemp')
  }

  setmaindata(data){
    localStorage.setItem('maindata',data);
  }

  getmaindata(){
    // let temp = this.uid;
    return localStorage.getItem('maindata')
  }

  setaccodata(data){
    localStorage.setItem('accodata',data);
  }

  getaccodata(){
    return localStorage.getItem('accodata')
  }

  setminodata(data){
    localStorage.setItem('minodata',data);
  }

  getminodata(){
    return localStorage.getItem('minodata')
  }

}