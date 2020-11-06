import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  name;
  email;
  mobile;
  mino;
  constructor(private http: HttpClient, private profile: DataService) {
    try {
      this.name = JSON.parse(this.profile.getJdata()).name;
      this.email = JSON.parse(this.profile.getJdata()).email;
      this.mobile = JSON.parse(this.profile.getJdata()).mobile;
      this.mino = JSON.parse(this.profile.getJdata()).mi_no;
    } catch (error) {
      this.name = JSON.parse(this.profile.getmaindata()).name;
      // this.email = JSON.parse(this.profile.getmaindata()).email;
      this.mobile = JSON.parse(this.profile.getmaindata()).mobile;
      this.mino = JSON.parse(this.profile.getmaindata()).mi_no;
    }
  }
  blog;
  topic;
  content;

  profiledata;
  ngOnInit() {
    this.http.get("https://api2.moodi.org/blog/").subscribe((data: any[]) => {
      this.blog = data.reverse();
    });

    if (this.email != undefined) {
      this.http
        .get("https://api2.moodi.org/ccpuser/" + this.email + "/")
        .subscribe((data: any[]) => {
          this.profiledata = data;
        });

      this.http
        .post("https://api2.moodi.org/ccp-user/getScore", {
          email: JSON.parse(this.profile.getJdata()).email
          // email:'jasujarishita13@gmail.com'
        })
        .subscribe((data: any[]) => {
          console.log(data);
        });

      $("#imageUpload").change(function() {
        readURL(this);
      });

      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var closebtn = document.getElementById("close");

      // When the user clicks the button, open the modal
      btn.onclick = function() {
        modal.style.display = "block";
      };

      //When the user clicks on close, close the modal
      closebtn.onclick = function() {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }
  file;
  onChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
      this.formData.append("bloger_pic", this.file);
    }
  }
  popup;
  formData = new FormData();
  type;
  postbutton = true;
  submit() {
    if (this.topic == undefined) {
      alert("Please enter Blog Topic");
      return;
    }
    if (this.content == undefined) {
      alert("Please enter Blog Content");
      return;
    }
    if (this.file == undefined) {
      alert("Please upload Image");
      return;
    }

    if (this.profiledata["type1"] == "CL") this.type = "CL";
    else if (
      this.profiledata["type1"] == "CH" ||
      this.profiledata["type1"] == "CHN" ||
      this.profiledata["type1"] == "CLN"
    )
      this.type = "CH";
    else if ((this.type = "CA")) this.type = "CA";
    this.postbutton = false;
    this.formData.append("bloger_name", this.profiledata["name"]);
    this.formData.append("pic_url", this.profiledata["profileurl"]);
    this.formData.append("types", this.type);
    this.formData.append("College", this.profiledata["college_name"]);
    this.formData.append("bloger_topic", this.topic);
    this.formData.append("bloger_blog", this.content);
    this.formData.append("bloger_status", "no");

    this.http
      .post<any>(
        "https://api2.moodi.org/ccpuser/blog",
        // this.http.post("https://api2.moodi.org/ccpuser/blog",
        this.formData
      )
      .subscribe(
        result => {
          console.log(result);

          this.popup = `Poster for Review`;
          var x = document.getElementById("snackbar");
          x.className = "show";
          this.topic = undefined;
          this.content = undefined;
          this.file = undefined;
          this.postbutton = true;
          setTimeout(function() {
            x.className = x.className.replace("show", "");
          }, 5000);
        },
        data => {
          this.postbutton = true;
          console.log(data);
        },
        () => {
          this.postbutton = true;
        }
      );
  }
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#imagePreview").css("background-image", "url(" + reader.result + ")");
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
