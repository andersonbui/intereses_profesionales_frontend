import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitucionComponent } from './institucion.component';
import { InstitucionRoutingModule } from './institucion-routing.module';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import { VerInstitucionComponent } from './ver-institucion/ver-institucion.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InstitucionRoutingModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    TableModule,
    FormsModule
  ],
  declarations: [
    InstitucionComponent,
    VerInstitucionComponent
  ]
})
export class InstitucionModule { }
