import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddPostComponent } from './components/admin/admin-add-post/admin-add-post.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminPostComponent } from './components/admin/admin-post/admin-post.component';
import { AdminViewPostComponent } from './components/admin/admin-view-post/admin-view-post.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { SalesComponent } from './components/user-dashboard/sales/sales.component';
import { ItComponent } from './components/user-dashboard/it/it.component';
import { MarketingComponent } from './components/user-dashboard/marketing/marketing.component';
import { AccountsComponent } from './components/user-dashboard/accounts/accounts.component';
import { HrComponent } from './components/user-dashboard/hr/hr.component';
import { EntrepComponent } from './components/user-dashboard/entrep/entrep.component';



const routes: Routes = [

  {path:'user-login',component:UserLoginComponent},
  {path:'Accounts',component:AccountsComponent},
  {path:'Entrep',component:EntrepComponent},
  {path:'HR',component:HrComponent},
  {path:'IT',component:ItComponent},
  {path:'Market',component:MarketingComponent},
  {path:'sales',component:SalesComponent},
  {path:'home',component:HomeComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'post/:id',component:PostComponent},
  {path:'admin/posts',component:AdminPostComponent},
  {path:'admin',component:AdminPostComponent},
  {path:'user-signup',component:UserSignupComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'admin/posts/add',component:AdminAddPostComponent},
  {path:'admin/posts/:id',component:AdminViewPostComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
