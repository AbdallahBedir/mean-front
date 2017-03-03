import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard} from './guards/Auth.guard';
import { NonAuthGuard} from './guards/Non-Auth.guard';
import { AuthService } from './services/auth.service';

import { RegisterSnackBarComponent } from './components/snack-bar/register-snack-bar.component';
import { LoginSnackBarComponent } from './components/snack-bar/login-snack-bar.component';
import { LogoutSnackBarComponent } from './components/snack-bar/logout-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegisterSnackBarComponent,
    LoginSnackBarComponent,
    LogoutSnackBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  entryComponents:[
    RegisterSnackBarComponent,LoginSnackBarComponent,
    LogoutSnackBarComponent
  ],
  providers: [AuthService,AuthGuard,NonAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
