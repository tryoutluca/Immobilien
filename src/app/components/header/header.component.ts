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
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoginModalVisible = false;

  // Router im Konstruktor injizieren
  constructor(private router: Router) {}

  openLoginModal(): void {
    this.isLoginModalVisible = true;
  }

  closeLoginModal(): void {
    this.isLoginModalVisible = false;
  }

  handleLoginAttempt(loginData: any): void {
    console.log('Login attempt received in header:', loginData);
    // ... (deine Login-Logik)
    // this.closeLoginModal();
  }

  // --- NEUE METHODE ---
  // Navigiert zur Seite für die Inseratserstellung
  navigateToCreateListing(): void {
    console.log('Navigating to create listing page...');
    // Ersetze '/inserat-erstellen' durch den tatsächlichen Pfad (Route)
    // zu deiner Komponente für die Inseratserstellung.
    this.router.navigate(['/inserat-erstellen']);
  }
}