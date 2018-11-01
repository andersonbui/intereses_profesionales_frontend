import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import {PrivatePageComponent} from './componentes/private-page/private-page.component';
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';

import {AuthGuard} from './guards/auth.guard';

import { RolGuard } from './guards/rol.guard';
import { AdminUsuariosComponent } from './componentes/private-page/admin-usuarios/admin-usuarios.component';
import { EditStudentPageComponent } from './componentes/edit-student-page/edit-student-page.component';
import { InstitucionModule } from './componentes/institucion/institucion.module';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'private', component: PrivatePageComponent},
  {path: 'inputgroup', loadChildren: './componentes/inputgroup/inputgroupdemo.module#InputGroupDemoModule'},
  {path: 'registerStudent', component: EditStudentPageComponent},
  {path: 'admin', component: AdminUsuariosComponent},
  {path: 'editarPerfil', component: EditStudentPageComponent},
  {path: 'estudiante', component: EditStudentPageComponent},
  {path: 'institucion', loadChildren: './componentes/institucion/institucion.module#InstitucionModule'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
