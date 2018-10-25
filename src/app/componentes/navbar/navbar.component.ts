import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public nombreUsuario: string;
  public isLogin: boolean;
  public emailUsuario: string;
  public fotoUsuario: string;

  constructor(
    public authService: AuthService

  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    })
  }

  onClickLogout() {
    this.authService.logout();
  }


}
