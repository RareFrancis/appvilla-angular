import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { OverviewComponent } from './overview/overview.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { BlugComponent } from './blug/blug.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetComponent } from './reset/reset.component';
import { ChangeComponent } from './change/change.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    OverviewComponent,
    PricingComponent,
    TeamComponent,
    BlugComponent,
    FaqComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    ResetComponent,
    ChangeComponent,
    LoginComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
