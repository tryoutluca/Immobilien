import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from '../../login-modal/login-modal.component';
import { Router, RouterModule } from '@angular/router'; // Router und RouterModule importieren

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LoginModalComponent,
    RouterModule // RouterModule hier hinzufügen für routerLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Sicherstellen, dass es .scss ist
})
export class HeaderComponent {
  isLoginModalVisible = false;
  isMenuOpen = false; // NEU: Zustand für Hamburger-Menü

  constructor(private router: Router) {}

  // NEU: Schaltet den Menü-Zustand um
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // NEU: Schließt das Menü (wird von Button-Klicks aufgerufen)
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  openLoginModal(): void {
    this.isLoginModalVisible = true;
    this.closeMenu(); // Menü schließen, wenn Modal geöffnet wird
  }

  closeLoginModal(): void {
    this.isLoginModalVisible = false;
  }

  handleLoginAttempt(loginData: any): void {
    console.log('Login attempt received in header:', loginData);
    // ... (deine Login-Logik)
    this.closeLoginModal(); // Modal nach Versuch schließen (war auskommentiert)
  }

  navigateToCreateListing(): void {
    console.log('Navigating to create listing page...');
    this.router.navigate(['/inserat-erstellen']);
    this.closeMenu(); // Menü nach Navigation schließen
  }
}