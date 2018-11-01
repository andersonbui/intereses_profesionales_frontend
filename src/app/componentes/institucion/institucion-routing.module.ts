import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstitucionComponent } from './institucion.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: InstitucionComponent }
		])
	],
	exports: [
		RouterModule
	]
})
export class InstitucionRoutingModule { }
