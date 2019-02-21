import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
   ],
   exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [ RegisterComponent , LoginComponent, HomeComponent ];
