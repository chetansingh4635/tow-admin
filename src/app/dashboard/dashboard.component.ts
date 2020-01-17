import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public router: Router,
    public notification: ToastrService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem("token"))
      this.router.navigate(['/login'])
  }

  public logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
    this.notification.success("Logout Successfull");
  }
}
