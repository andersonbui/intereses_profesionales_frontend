import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student-page',
  templateUrl: './edit-student-page.component.html',
  styleUrls: ['./edit-student-page.component.scss']
})
export class EditStudentPageComponent implements OnInit {

  private fechaNacimiento;
  private ciudad;
  private departamento;
  private pais;
  private celular;
  private direccion;
  private email;
  private identificacion;
  private tipoIdentificacion;
  private apellidos;
  private nombres;

  constructor() { }

  ngOnInit() {
  }
  onSubmitAddStudent() {

  }

}
