import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css'],
})
export class ChangeComponent implements OnInit {
  changeForm!: FormGroup;
  id!: number | undefined;
  email!: string | undefined;
  userdata: any;

  constructor(private fb: FormBuilder,private api: ApiService,private activatedRoute: ActivatedRoute,private router:Router) {
    this.changeForm = this.fb.group({
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // Use ActivatedRoute.queryParams to access query parameters
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.id = +queryParams['id'];
      this.email = queryParams['Email'];

      console.log(this.id);
      console.log(this.email);

      // Check if id is a valid number
      if (!isNaN(this.id)) {
        // Parameters are present and valid, proceed with your logic.
        this.api.fetchData(this.id).subscribe((data: any) => {
          this.userdata = data;
          console.log(this.userdata);
          this.changeForm.setValue({
            Password: this.userdata.Password,
            ConfirmPassword: this.userdata.ConfirmPassword,
          });
        });
      } else {
        // Handle the case where parameters are missing or invalid.
        console.error('Invalid or missing id parameter');
      }
    });
  }

  changePassword() {
    // Check if the form is valid
    if (this.changeForm.valid) {
      // Get the new password from the form
      const newPassword = this.changeForm.value.Password;

      // Ensure that id and email are defined before making the API call
      if (this.id && this.email) {
        // Call the changePassword method from your ApiService to update the password
        this.api.changePassword(this.id, this.email, newPassword,newPassword).subscribe(
          (response: any) => {
            // Password updated successfully
            console.log('Password updated successfully:', response);
            alert("Updated Successfully")
            this.router.navigate(['/signin'])

            // Optionally, you can navigate to a success page or show a success message.
            // For example, navigate back to the sign-in page:
            // this.router.navigate(['/signin']);
          },
          (error) => {
            // Handle error scenarios, such as displaying an error message.
            console.error('Error updating password:', error);
          }
        );
      } else {
        console.error('ID or email is undefined');
      }
    }
  }
}
