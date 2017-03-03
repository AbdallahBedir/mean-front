import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component'
import { LoginComponent } from './components/login/login.component';

import {AuthGuard} from './guards/Auth.guard';
import { NonAuthGuard} from './guards/Non-Auth.guard';

const routes: Routes = [

  {path:'',redirectTo:"Home",pathMatch:"full"},
  {path: 'Home', component:HomeComponent},
  {path: 'Login', component:LoginComponent,canActivate:[NonAuthGuard]},
  {path: 'Register', component:RegisterComponent,canActivate:[NonAuthGuard]},
  {path: 'Profile', component:ProfileComponent,canActivate:[AuthGuard]},
  {path: 'Dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo:"Home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
