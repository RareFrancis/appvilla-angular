import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  // @ViewChild('topOfPage') topOfPage!: ElementRef;
emailForm!:FormGroup;
isButtonEnabled = false;
  constructor(private fb:FormBuilder, private router: Router){}
  ngOnInit() {
    this.emailForm = this.fb.group({
      email:['',[Validators.required]]
    })
    
  }
  addemail(data: any) {
    
    alert('Successfully subscribed!');

    
    window.location.href = 'https://www.youtube.com/watch?v=m526ydiaS2c'; 
  }

  // scrollToTop() {
  //   if (this.topOfPage) {
  //     this.topOfPage.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }

}
