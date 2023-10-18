import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { PaybillComponent } from './paybill/paybill.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewplanComponent } from './viewplan/viewplan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserComponent } from './user/user.component';
import { SampleheaderComponent } from './sampleheader/sampleheader.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SupportComponent } from './support/support.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { LinkfamilyComponent } from './linkfamily/linkfamily.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StartComponent } from './start/start.component';
import { MyplanComponent } from './myplan/myplan.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ViewmemberComponent } from './viewmember/viewmember.component';
import { MyplansComponent } from './myplans/myplans.component';
import { UserplanComponent } from './userplan/userplan.component';
import { MobileplansComponent } from './mobileplans/mobileplans.component';
import { UsermobileComponent } from './usermobile/usermobile.component';
import { UserpayComponent } from './userpay/userpay.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { AllusersComponent } from './allusers/allusers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    HomeComponent,
    PaybillComponent,
    SignupComponent,
    ViewplanComponent,
    LoginComponent,
    UserComponent,
    SampleheaderComponent,
    SupportComponent,
    LinkfamilyComponent,
    StartComponent,
    MyplanComponent,
    ViewprofileComponent,
    AddmemberComponent,
    ViewmemberComponent,
    MyplansComponent,
    UserplanComponent,
    MobileplansComponent,
    UsermobileComponent,
    UserpayComponent,
    AdminpageComponent,
    BillingInfoComponent,
    AllusersComponent,
    InvoicesComponent,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,MatButtonModule,MatPaginatorModule,MatTabsModule,
    AppRoutingModule, MatFormFieldModule,MatInputModule,MatCardModule,
    FontAwesomeModule,FormsModule,NgOtpInputModule,NgbCarouselModule,
    BrowserAnimationsModule,MatTabsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
