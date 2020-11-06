import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.component.html',
  styleUrls: ['./cl.component.scss']
})
export class ClComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  sendTo(move){
    this.router.navigateByUrl('/register/'+move);
  }


}
