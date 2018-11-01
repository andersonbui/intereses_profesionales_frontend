import { Component, OnInit } from '@angular/core';
import { InstitucionService } from 'src/app/servicios/institucion.service';
import { Institucion } from 'src/app/Institucion';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.scss']
})
export class InstitucionComponent implements OnInit {

  instituciones: Institucion[];
  selectedInstitucion: Institucion;

  displayDialog: boolean;

  cols: any[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private institucionService: InstitucionService) { }

  ngOnInit() {
      this.institucionService.getAll().then((inst: Institucion[]) => {
        this.instituciones = inst;
        this.cols = [
          { field: 'nombre', header: 'nombre' },
          { field: 'direccion', header: 'direccion' }
        ];
      });
  }

  selectCar(event: Event, inst: Institucion) {
      this.selectedInstitucion = inst;
      this.displayDialog = true;
      event.preventDefault();
  }

  onSortChange(event) {
      let value = event.value;
      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      } else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

  onDialogHide() {
      this.selectedInstitucion = null;
  }
  showDialogToAdd() {

  }
  onRowSelect(event) {

  }
  save() {

  }
  delete() {

  }
}
