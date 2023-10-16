import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PaybillComponent } from './paybill/paybill.component';
import { SignupComponent } from './signup/signup.component';
import { ViewplanComponent } from './viewplan/viewplan.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SupportComponent } from './support/support.component';
import { LinkfamilyComponent } from './linkfamily/linkfamily.component';
import { StartComponent } from './start/start.component';
import { MyplanComponent } from './myplan/myplan.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { ViewmemberComponent } from './viewmember/viewmember.component';
import { UserplanComponent } from './userplan/userplan.component';
import { MobileplansComponent } from './mobileplans/mobileplans.component';
import { UsermobileComponent } from './usermobile/usermobile.component';
import { UserpayComponent } from './userpay/userpay.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { AllusersComponent } from './allusers/allusers.component';
import { MyplansComponent } from './myplans/myplans.component';
import { InvoicesComponent } from './invoices/invoices.component';


const routes: Routes = [ { path: 'home', component: HomeComponent },{ path: 'adminpage', component:AdminpageComponent},{ path: 'usermobile', component: UsermobileComponent},
{ path: 'userpay', component: UserpayComponent},{ path: 'mobileplans', component: MobileplansComponent },
{ path: 'addmember', component: AddmemberComponent },{ path: 'billinfo', component:BillingInfoComponent},
{ path: 'paybill', component: PaybillComponent },{path: 'viewprofile', component: ViewprofileComponent},
{ path: 'signup', component: SignupComponent},{path: 'plans', component: ViewplanComponent},
{ path: 'login', component: LoginComponent},{ path: 'user', component: UserComponent},
{ path: 'viewmember', component: ViewmemberComponent },{ path: 'userplan', component: UserplanComponent},
{ path: 'support', component: SupportComponent},{ path: 'link', component: LinkfamilyComponent},
{path:'start',component:StartComponent},{path:'myplan',component:MyplansComponent},{path:'allusers',component:AllusersComponent},
{ path: '', component: HomeComponent},{ path: 'invoices', component: InvoicesComponent},
{ path: '**', redirectTo: '/' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
