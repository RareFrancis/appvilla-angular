import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appvilla';
  constructor(private router: Router) {}

  ngOnInit(): void {}
navigateToSignIn(): void {
  this.router.navigate(['/signup']);
}

}

