import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroupDemo } from './inputgroupdemo';
import { InputGroupDemoRoutingModule } from './inputgroupdemo-routing.module';
// import { InputTextModule } from '../inputtext/inputtext';
// import { CheckboxModule } from '../../../componentes/checkbox/checkbox';
// import { RadioButtonModule } from '../../../componentes/radiobutton/radiobutton';
// import { ButtonModule } from '../../../componentes/button/button';
// import { TabViewModule } from '../../../componentes/tabview/tabview';
// import { CodeHighlighterModule } from '../../../componentes/codehighlighter/codehighlighter';

@NgModule({
    imports: [
        CommonModule,
        InputGroupDemoRoutingModule,
        FormsModule,
        // InputTextModule,
        // ButtonModule,
        // CheckboxModule,
        // RadioButtonModule,
        // TabViewModule,
        // CodeHighlighterModule
    ],
    declarations: [
        InputGroupDemo
    ]
})
export class InputGroupDemoModule {}
