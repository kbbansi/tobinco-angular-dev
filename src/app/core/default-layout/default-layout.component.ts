import { Component, OnInit } from '@angular/core';
import { navList } from '../nav-list';
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  sideMenu = navList;
  collapse = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(ref: MatSidenav ) {
    this.collapse = !this.collapse;
  }

  logOut() {
    alert('Logging out')
  }

}
