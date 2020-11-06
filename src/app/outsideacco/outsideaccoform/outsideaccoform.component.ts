import { Component, OnInit } from "@angular/core";
import { DataService } from "app/data.service";
import * as $ from "jquery";
import { WindowService } from "../../window.service";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-outsideaccoform",
  templateUrl: "./outsideaccoform.component.html",
  styleUrls: ["./outsideaccoform.component.scss"]
})
export class OutsideaccoformComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private acco: DataService,
    private winRef: WindowService
  ) {}
  amount;
  options;
  name;
  email;
  number;
  mi_no;
  ngOnInit() {
    this.accommodation_data = JSON.parse(this.acco.getaccodata());
    console.log(this.accommodation_data);
    this.name = JSON.parse(this.acco.getmaindata()).name;
    this.email = JSON.parse(this.acco.getmaindata()).email;
    this.number = JSON.parse(this.acco.getmaindata()).mobile;
    this.mi_no = JSON.parse(this.acco.getmaindata()).mi_no;

    this.order_id = this.accommodation_data.slice(-1)[0].order_id;
    this.accommodation_data.splice(-1, 1);
    this.grand_value = this.accommodation_data[0].grand_value;
    this.amount = Number(this.grand_value) * 100;

    this.options = {
      key: "rzp_live_gQlIxPl8bc06Si", // Enter the Key ID generated from the Dashboard
      amount: this.amount,
      currency: "INR",
      name: "Mood Indigo Accommodation",
      description: " Asia's largest college cultural festival",
      image: "https://moodi.org/assets/logos/Asset%2069homebglogo.svg",
      order_id: this.order_id, //This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
      handler: this.paymentCapture.bind(this),
      prefill: {
        name: this.name,
        email: this.email,
        contact: this.number
      },
      notes: {
        address: this.mi_no
      },
      theme: {
        color: "#F37254"
      }
    };
  }

  scrollWin() {
    document.getElementById("scroller").scrollBy(0, 1000);
  }

  paymentCapture(response) {
    console.log(response);
    this.http
      .post("https://api2.moodi.org/update/payment", {
        order_id: this.order_id,
        payment_id: response["razorpay_payment_id"],
        signature: response["razorpay_signature"]
      })
      .subscribe(
        result => {
          this.router.navigate(["outsideacco/pasd2ccd52dc5s2sd56cdid"], {
            skipLocationChange: true
          });
          // alert("Yayyyyyyyyy");
        },
        error => {
          alert(error["error"]);
          console.log(error["error"]);
        }
      );
  }
  accommodation_data;
  grand_value;
  rzp1: any;
  order_id;

  mi_numbers = [];
  item;
  mino_data = [];

  arrayOne(n: number): any[] {
    return Array(n);
  }

  getIndex(i) {
    return Number(i + 1);
  }

  hasWhiteSpace(s) {
    return /\s/g.test(s);
  }

  submit() {
    window.open(
      "https://www.townscript.com/e/external-accommodation-240044",
      "_blank"
    );
    //   console.log(this.accommodation_data.length);
    //   this.mino_data = [];
    //   for (var i = 0; i < this.accommodation_data.length; i++) {
    //     var samehotelmi = "";
    //     for (var j = 1; j <= this.accommodation_data[i].room_count; j++) {
    //       var sameroommi = "";
    //       for (var k = 1; k <= this.accommodation_data[i].no_of_beds; k++) {
    //         if (sameroommi == "")
    //           sameroommi = $(
    //             "#" + this.accommodation_data[i].room_id + "a" + j + "a" + k
    //           ).val();
    //         else
    //           sameroommi =
    //             sameroommi +
    //             "#" +
    //             $(
    //               "#" + this.accommodation_data[i].room_id + "a" + j + "a" + k
    //             ).val();
    //         console.log(sameroommi);

    //         if (
    //           $(
    //             "#" + this.accommodation_data[i].room_id + "a" + j + "a" + k
    //           ).val() == ""
    //         ) {
    //           alert("Please Fill All the MI Numbers");
    //           return;
    //         }
    //         if (
    //           this.hasWhiteSpace(
    //             $(
    //               "#" + this.accommodation_data[i].room_id + "a" + j + "a" + k
    //             ).val()
    //           )
    //         ) {
    //           alert(
    //             "No Whitespaces are Allowed in MI Number, For Example : MI-ABC-000"
    //           );
    //           return;
    //         }
    //       }

    //       if (samehotelmi == "") samehotelmi = sameroommi;
    //       else samehotelmi = samehotelmi + "^" + sameroommi;
    //     }
    //     this.item = {
    //       room_id: this.accommodation_data[i].room_id,
    //       mi_numbers: samehotelmi
    //     };

    //     this.mino_data.splice(i, 0, this.item);
    //   }

    //   console.log(this.mino_data);

    //   this.http
    //     .put("https://api2.moodi.org/create/orderid", {
    //       order_id: this.order_id,
    //       mi_number: this.mino_data
    //     })
    //     .subscribe(
    //       result => {
    //         // this.paymentCapture("");
    //         this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
    //         this.rzp1.open();
    //         // this.acco.setminodata(JSON.stringify(this.mino_data));
    //       },
    //       error => {
    //         console.log(error["error"]);
    //       }
    //     );
  }
}
