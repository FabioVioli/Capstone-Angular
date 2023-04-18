import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile-top',
  templateUrl: './navbar-mobile-top.component.html',
  styleUrls: ['./navbar-mobile-top.component.scss']
})
export class NavbarMobileTopComponent {

  isLoggedIn(){
    if (localStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('currentUser')
  }
}
