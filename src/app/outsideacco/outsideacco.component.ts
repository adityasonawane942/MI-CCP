import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-outsideacco',
  templateUrl: './outsideacco.component.html',
  styleUrls: ['./outsideacco.component.scss']
})
export class OutsideaccoComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(){
    
  }

}