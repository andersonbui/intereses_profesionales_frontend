import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  user: Usuario;
  constructor(public auth: AuthService) {
    // auth.user;
  }

  ngOnInit() {
    this.auth.user.subscribe(user => this.user = user);
  }

  canRead() {
    if (this.auth.canRead(this.user)) {
      console.log('Puede leerse estudainte docente o admin');
      // this.postRef.update({ title: 'Edited Title!' });
      return true;
    } else {
      console.error('you are not allowed to do that!');
      return false;
    }
  }

  canEdit() {
    if (this.auth.canEdit(this.user)) {
      console.log('Puede leerse docente o admin');
      // this.postRef.update({ title: 'Edited Title!' });
      return true;
    } else {
      console.error('you are not allowed to do that!');
      return false;
    }
  }

  canEliminar() {
    if (this.auth.canDelete(this.user)) {
      console.log('Puede eliminar admin ');
      // this.postRef.update({ title: 'Edited Title!' });
      return true;
    } else {
      console.error('you are not allowed to do that!');
      return false;
    }
  }

  leerPost() {
    console.log('leyendo el material ');
  }

  editarPost() {
    console.log('editando el material ');
  }

  eliminarPost() {
    console.log('editando el material ');
  }
}
