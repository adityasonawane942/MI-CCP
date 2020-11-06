import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.scss']
})
export class PaymentsuccessComponent implements OnInit {

  constructor(
    private acco: DataService,
    ) { }

    accommodation_data;
    minodata;

  ngOnInit() {
    this.accommodation_data = JSON.parse(this.acco.getaccodata());
    console.log(this.accommodation_data)
    this.minodata = this.acco.getminodata();
    console.log(this.minodata)
  }

}
