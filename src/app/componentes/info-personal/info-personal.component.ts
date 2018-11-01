import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/Persona';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.scss']
})
export class InfoPersonalComponent implements OnInit {
  @Input() persona: Persona;

  constructor() { }

  ngOnInit() {
   // this.persona = new Persona();
  }
  onSubmitAddStudent() {
    console.log('guardando datos de usuario');
  }
}
