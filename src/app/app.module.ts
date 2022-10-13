import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAddPostComponent } from './components/admin/admin-add-post/admin-add-post.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminPostComponent } from './components/admin/admin-post/admin-post.component';
import { AdminViewPostComponent } from './components/admin/admin-view-post/admin-view-post.component';
import { PostComponent } from './components/post/post.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { HomeComponent } from './components/home/home.component';
import { SalesComponent } from './components/user-dashboard/sales/sales.component';
import { ItComponent } from './components/user-dashboard/it/it.component';
import { MarketingComponent } from './components/user-dashboard/marketing/marketing.component';
import { EntrepComponent } from './components/user-dashboard/entrep/entrep.component';
import { AccountsComponent } from './components/user-dashboard/accounts/accounts.component';
import { HrComponent } from './components/user-dashboard/hr/hr.component';
     




@NgModule({
  declarations: [
    AppComponent,
    AdminAddPostComponent,
    AdminLoginComponent,
    AdminPostComponent,
    AdminViewPostComponent,
    PostComponent,
    UserDashboardComponent,
    UserLoginComponent,
    UserSignupComponent,
    HomeComponent,
    SalesComponent,
    ItComponent,
    MarketingComponent,
    EntrepComponent,
    AccountsComponent,
    HrComponent,
                    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
