import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { OverviewComponent } from './overview/overview.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { BlugComponent } from './blug/blug.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { ChangeComponent } from './change/change.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'overview',component:OverviewComponent},
  {path:'pricing',component:PricingComponent},
  {path:'team',component:TeamComponent},
  {path:'blug',component:BlugComponent},
  {path:'contact',component:ContactComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'reset',component:ResetComponent},
  {path:'change',component:ChangeComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
