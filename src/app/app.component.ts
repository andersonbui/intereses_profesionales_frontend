import { Component, OnInit } from '@angular/core';
import { AuthService } from './servicios/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeMenuId: string;
  menuActive: boolean;
  title = 'interesesProfesionales';
  isLogin: boolean;
  items: MenuItem[];

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.items = [
      { label: 'Invite', icon: 'fa fa-fw fa-bar-chart', routerLink: 'login' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }


  onMenuButtonClick(event: Event) {
    this.menuActive = !this.menuActive;
    event.preventDefault();
}

}
