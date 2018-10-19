import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit() {
  }

  

}
