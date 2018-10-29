import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.scss']
})
export class PrivatePageComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
    {label: 'Invite', icon: 'fa fa-fw fa-bar-chart', routerLink: 'login'},
    {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
    {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
    {label: 'Documentation', icon: 'fa fa-fw fa-book'},
    {label: 'Support', icon: 'fa fa-fw fa-support'},
    {label: 'Social', icon: 'fa fa-fw fa-twitter'}
      ];
    }

  // ///// Role-based Authorization //////
  // canRead(user: Usuario): boolean {
  //   console.log('canread user;  :', user);
  //   const allowed = ['estudiante', 'admin', 'docente'];
  //   return this.checkAuthorization(user, allowed);
  // }

  // canEdit(user: Usuario): boolean {
  //   const allowed = ['admin', 'docente'];
  //   return this.checkAuthorization(user, allowed);
  // }

  // canDelete(user: Usuario): boolean {
  //   const allowed = ['admin'];
  //   return this.checkAuthorization(user, allowed);
  // }
}
