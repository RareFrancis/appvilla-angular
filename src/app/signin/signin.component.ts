import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm!:FormGroup;
 
  constructor(private fb:FormBuilder,private api:ApiService,private http:HttpClient,private routor:Router){}
  ngOnInit() {
    this.signinForm=this.fb.group({
      Email:['',[Validators.required,Validators.pattern("[a-z]+[0-9]+[@]+[a-z]+[.]+[a-z]+")]],
      Password:['',[Validators.required]],
    });
  }
addsignin(data: any) {
  this.http.get<any>("http://localhost:9000/alldata").subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.Email === this.signinForm.value.Email && a.Password === this.signinForm.value.Password;
    })
   

    if (user) {
      
        alert("Successfully Signed In");
      this.routor.navigate(['/home']);
      
    } else {
      alert("Invalid email or password");
    }
   });
}
}





