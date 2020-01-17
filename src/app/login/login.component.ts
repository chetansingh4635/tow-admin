import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isSubmitted = false;
  constructor(
    public http:HttpService,
    public router:Router,
    public fb:FormBuilder,
    public notification:ToastrService) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', Validators.required]
      })
     }

  ngOnInit() {
    if(localStorage.getItem("token"))
    this.router.navigate(['/home']);
  }

  public login(){
    this.isSubmitted =true;
    console.log(this.loginForm);
    
    if(this.loginForm.valid){
this.http.login(this.loginForm.value).subscribe((data:any)=>{
localStorage.setItem("token",data.data)
  this.notification.success("Login Successfull");
  this.router.navigate(['/home'])
},
(err)=>{
  console.log(err);
  this.notification.error(err.error.message);
  
})
    }
  }
}
