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
  }

  editPost() {
    console.log('editar postr');
  }

}
