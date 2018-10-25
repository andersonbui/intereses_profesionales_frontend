import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginPageComponent} from  './componentes/login-page/login-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import {PrivatePageComponent} from './componentes/private-page/private-page.component';
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';

import {AuthGuard} from './guards/auth.guard';
import { StudentPageComponent } from './componentes/student-page/student-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'private', component: PrivatePageComponent, canActivate: [AuthGuard]},
  {path: 'registerStudent', component: StudentPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
