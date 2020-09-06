import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  imports: [
    AuthRoutingModule, 
    FormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent ] ,
    providers: [AuthService],
})
export class AuthModule { }
