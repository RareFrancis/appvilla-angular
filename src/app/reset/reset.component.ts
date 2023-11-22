import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,isFormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit{
  resetForm!:FormGroup;
  users: any[] = []; 
  constructor(private fb:FormBuilder,private api:ApiService,private http:HttpClient,private router:Router){}
ngOnInit(){
  this.resetForm=this.fb.group({
  Email:['',[Validators.required,Validators.pattern("[a-z]+[0-9]+[@]+[a-z]+[.]+[a-z]+")]],
});
this.fetchUserData();
}

fetchUserData() {
  this.http.get<any>('http://localhost:9000/alldata').subscribe(
    (response) => {
      this.users = response;
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}

resetpassword(data:any) {
  const emailToFind = this.resetForm.value.Email;

  const user = this.users.find((a: any) => {
    return a.Email === emailToFind;
  });

  if (user) {
    // Email found, now you can access the associated password and ID
    const Email = this.resetForm.value.Email;
    const Password = user.Password;
    const id = user.id;

    // Carry the email, password, and ID to another router component
    alert("Successfully carry to the Id and Others");
    this.router.navigate(['/change'], {
      queryParams: { Email, Password, id }
    });
  } else {
    // Email not found
    console.log('Email not found.');
  }
}

}
