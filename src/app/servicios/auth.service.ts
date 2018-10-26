import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebase } from '@firebase/app';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { Usuario } from '../Usuario';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  public user: BehaviorSubject<Usuario> = new BehaviorSubject(null);

  constructor(
    public afAuth: AngularFireAuth,
     private afd: AngularFireDatabase,
    private router: Router
  ) {
    this.afAuth.authState
      .switchMap(auth => {
        // AngularFireModule.initializeApp(environment.firebaseConfig, 'appname1');
        if (auth) {
          /// signed in
          console.log('uid:', auth.uid);
          const cadenaConsulta = '/user/' + auth.uid;
          console.log(' cadenaConsulta:', cadenaConsulta);
          const resultado = this.afd.object(cadenaConsulta).valueChanges();
          // lista usuarios this.afd.list('user').valueChanges();
          return resultado;
        } else {
          /// not signed in
          return Observable.of(null);
        }
      })
      .subscribe(user => {
        this.user.next(user);
        console.log('auth user', user);
        console.log('auth this.user', this.user);
      });

   }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => {
          this.updateUser(userData.user);
          resolve(userData);
        },
          err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth ));
    // return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  //// Update user data ////

  /// updates database with user info after login
  /// only runs if user role is not already defined in database
  private updateUser(user) {
    const unUsuario: Usuario = new Usuario(user);
    console.log('user.uid :', user.uid);
    const cadenaConsulta = '/user/' + user.uid;

    const ref = this.afd.object(cadenaConsulta);
    ref.valueChanges().subscribe((usu: any) => {
      console.log('updateUser usu:', usu);
        if (!usu.role) {
          console.log('updateUser unUsuario:', unUsuario);
          console.log('usu :', usu);
          // ref.update(unUsuario);
          // objetousuario.update(userData);
        }
      });
  }

  ///// Role-based Authorization //////
  canRead(user: Usuario): boolean {
    console.log('canread user;  :', user);
    const allowed = ['estudiante', 'admin', 'docente'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: Usuario): boolean {
    const allowed = ['admin', 'docente'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: Usuario): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: Usuario, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }
}
