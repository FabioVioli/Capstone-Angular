import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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
