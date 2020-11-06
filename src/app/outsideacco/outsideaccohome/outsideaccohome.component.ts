import { Component, OnInit, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "app/data.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-outsideaccohome",
  templateUrl: "./outsideaccohome.component.html",
  styleUrls: ["./outsideaccohome.component.scss"]
})
export class OutsideaccohomeComponent implements OnInit {
  idclick(id: string) {
    var card = document.getElementById("move");
    document.getElementById(id + "counterdiv").style.display = "inline-block";
    card.style.display = "block";
    document.getElementById(id + "btngrp").style.display = "inline-block";
    document.getElementById(id + "movebtn").style.display = "none";
    document.getElementById(id + "plusbtn").style.display = "inline-block";
    document.getElementById(id + "minusbtn").style.display = "inline-block";
  }

  constructor(
    private http: HttpClient,
    private acco: DataService,
    private _ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  increment(id: string) {
    if (this.counter[id] == 0) this.idclick(id);
    if (this.counter[id] < this.details[id].remaining_rooms)
      this.counter[id] += 1;
    console.log(this.details);
    console.log(id);
    console.log(this.counter);
  }

  decrement(id: string) {
    if (this.counter[id] > 0) {
      this.counter[id] -= 1;
    }
    if (this.counter[id] == 0) {
      document.getElementById(id + "btngrp").style.display = "none";
      document.getElementById(id + "movebtn").style.display = "inline-block";
      document.getElementById(id + "plusbtn").style.display = "none";
      document.getElementById(id + "minusbtn").style.display = "none";
      document.getElementById(id + "counterdiv").style.display = "none";

      var showcard = false;
      for (var i = 0; i < this.max + 1; i++) {
        if (this.counter[i] != 0) {
          showcard = true;
          break;
        }
      }
      if (!showcard) {
        document.getElementById("move").style.display = "none";
      }
    }
  }

  total(id: string) {
    this.room_price[id] =
      this.counter[id] *
      this.details[id].price *
      this.details[id].no_of_beds *
      5;
  }
  grand_value_without_tax;

  grand_total() {
    this.grand_value = 0;
    for (var i = 0; i < this.max + 1; i++) {
      this.grand_value += this.room_price[i];
    }
    this.grand_value_without_tax = this.grand_value;
    this.grand_value += 0.012 * this.grand_value;
  }

  acco_data = [];
  disable = false;
  checkout() {
    this.disable = true;
    this.acco_data = [];
    document.getElementById("loader").style.display = "block";

    for (var i = 0; i < this.max + 1; i++) {
      if (this.counter[i] != 0) {
        this.item = {
          hotel_name: this.details[i].name,
          room_id: i,
          no_of_beds: this.details[i].no_of_beds,
          room_count: this.counter[i],
          price: this.details[i].price,
          grand_value: this.grand_value
        };
        this.acco_data.splice(i, 0, this.item);
      }
    }
    this.disable = false;
    this.acco_data.push({ order_id: "maa" });
    this.acco.setaccodata(JSON.stringify(this.acco_data));
    this.router.navigate(["outsideacco/sacasacscascscdsrr"], {
      skipLocationChange: true
    });

    // this.http
    //   .post("https://api2.moodi.org/create/orderid", {
    //     amount: this.grand_value * 100,
    //     google_id: JSON.parse(this.acco.getmaindata()).uid,
    //     acco_data: this.acco_data
    //   })
    //   .subscribe(
    //     result => {
    //       this.disable = false;
    //       this.acco_data.push({ order_id: result["order_id"] });
    //       this.acco.setaccodata(JSON.stringify(this.acco_data));
    //       this.router.navigate(["outsideacco/sacasacscascscdsrr"], {
    //         skipLocationChange: true
    //       });
    //       // this._ngZone.run(() =>
    //       //   this.router.navigate(["minoform"], {
    //       //     relativeTo: this.activatedRoute.parent
    //       //   },{ skipLocationChange: true })
    //       // );
    //       document.getElementById("loader").style.display = "none";
    //     },
    //     error => {
    //       this.disable = false;
    //       document.getElementById("loader").style.display = "none";
    //       alert(error["error"]);
    //       console.log(error);
    //     }
    //   );
  }

  hoteldetails;
  counter = [];
  max = 0;
  item;
  details = [];
  room_price = [];
  grand_value = 0;

  ngOnInit() {
    this.http.get("https://api2.moodi.org/hoteldetails").subscribe(
      result => {
        this.hoteldetails = result;
        console.log(result);
        for (var i = 0; i < this.hoteldetails.length; i++) {
          for (var j = 0; j < this.hoteldetails[i].rooms.length; j++) {
            if (this.hoteldetails[i].rooms[j].id > this.max) {
              this.max = this.hoteldetails[i].rooms[j].id;
            }
          }
        }

        for (var i = 0; i < this.max + 1; i++) {
          this.counter.push(0);
          this.room_price.push(0);
          this.details.push(0);
        }

        for (var i = 0; i < this.hoteldetails.length; i++) {
          for (var j = 0; j < this.hoteldetails[i].rooms.length; j++) {
            this.item = {
              name: this.hoteldetails[i].name,
              no_of_beds: this.hoteldetails[i].rooms[j].no_of_beds,
              price: this.hoteldetails[i].rooms[j].price,
              no_of_rooms: this.hoteldetails[i].rooms[j].no_of_rooms,
              remaining_rooms: this.hoteldetails[i].rooms[j]
                .remaining_no_of_rooms
            };
            this.details[this.hoteldetails[i].rooms[j].id] = this.item;
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
