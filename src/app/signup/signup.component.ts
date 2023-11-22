import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'

import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
 
  
  signupForm!:FormGroup;
  constructor(private fb:FormBuilder,private api:ApiService,private http:HttpClient,private router:Router){}
  ngOnInit(){
    this.signupForm=this.fb.group({
    Email:['',[Validators.required,Validators.pattern("[a-z]+[0-9]+[@]+[a-z]+[.]+[a-z]+")]],
    Password:['',[Validators.required]],
    ConfirmPassword:['',[Validators.required]]
  })
}

  addsignup(data:any){
      this.http.get<any>("http://localhost:9000/alldata").subscribe(res=>{
        const user = res.find((a:any)=>{
         return a.Email === this.signupForm.value.Email;
        })
        
        if(user){
          alert("Email already exists")
        }else{
          if(this.signupForm.valid && this.signupForm.value.Password===this.signupForm.value.ConfirmPassword){
            this.api.createdetails(this.signupForm.value).subscribe((res)=>{
              console.log(res);
              alert("successfully signed in..");
              this.router.navigate(['/signin'])
          });
          }else{
            alert("Form is not valid or password do not match")
          }
        }
      });
  }

  }
