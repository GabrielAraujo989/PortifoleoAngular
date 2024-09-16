import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None // Desabilita o encapsulamento de estilos
})
export class HeaderComponent {
  menuOpen = false;
  isLoggedIn = false; // Simulando o estado de login

  constructor(library: FaIconLibrary) {
    library.addIcons(faShoppingCart, faUserCircle);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
