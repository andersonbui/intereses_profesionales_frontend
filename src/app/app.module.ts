import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import {environment} from '../environments/environment';
import {AuthService} from './servicios/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { EditStudentPageComponent } from './componentes/edit-student-page/edit-student-page.component';

import {AccordionModule} from 'primeng/accordion';     // accordion and accordion tab
import {MenuItem} from 'primeng/api';                 // api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { RolGuard } from './guards/rol.guard';
import { AppBoostrapModule } from './app-bootstrap/app-bootstrap.module';
import { AdminUsuariosComponent } from './componentes/private-page/admin-usuarios/admin-usuarios.component';
import { InfoPersonalComponent } from './componentes/info-personal/info-personal.component';
import { VerEstudianteComponent } from './componentes/ver-estudiante/ver-estudiante.component';
import { EditarEstudianteComponent } from './componentes/estudiante/editar-estudiante/editar-estudiante.component';
import { AgregarEstudianteComponent } from './componentes/estudiante/agregar-estudiante/agregar-estudiante.component';
import { AgregarDocenteComponent } from './componentes/docente/agregar-docente/agregar-docente.component';
import { VerDocenteComponent } from './componentes/docente/ver-docente/ver-docente.component';
import { EditarDocenteComponent } from './componentes/docente/editar-docente/editar-docente.component';
import { EditarInstitucionComponent } from './componentes/institucion/editar-institucion/editar-institucion.component';
import { AgregarInstitucionComponent } from './componentes/institucion/agregar-institucion/agregar-institucion.component';
import { DocenteComponent } from './componentes/docente/docente.component';
import { EstudianteComponent } from './componentes/estudiante/estudiante.component';
import { InstitucionService } from './servicios/institucion.service';

@NgModule({
  declarations: [
    InfoPersonalComponent,
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent,
    EditStudentPageComponent,
    AdminUsuariosComponent,
    InfoPersonalComponent,
    VerEstudianteComponent,
    EditarEstudianteComponent,
    AgregarEstudianteComponent,
    AgregarDocenteComponent,
    VerDocenteComponent,
    EditarDocenteComponent,
    EditarInstitucionComponent,
    AgregarInstitucionComponent,
    DocenteComponent,
    EstudianteComponent
  ],
  imports: [
    AppBoostrapModule,
    MenuModule,
    TabMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-auth-firebase'),
    AngularFirestoreModule,
    FlashMessagesModule
  ],
  providers: [AuthService,
    AuthGuard,
    FlashMessagesService,
    AngularFireDatabase,
    RolGuard,
    InstitucionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
