import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  standalone: true, // Assuming standalone
  imports: [
    CommonModule, // Für *ngIf
    LoginModalComponent // Füge die Modal-Komponente zu den Imports hinzu
    ,
    LoginModalComponent
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Behalte deine SCSS-Datei bei
})
export class HeaderComponent {
  isLoginModalVisible = false; // State, um die Sichtbarkeit des Modals zu steuern

  openLoginModal(): void {
    this.isLoginModalVisible = true;
  }

  closeLoginModal(): void {
    this.isLoginModalVisible = false;
  }

  // Methode, die aufgerufen wird, wenn das Modal 'loginSubmit' auslöst
  handleLoginAttempt(loginData: any): void {
    console.log('Login attempt received in header:', loginData);
    // Hier könntest du z.B. einen AuthenticationService aufrufen
    // Nach erfolgreichem Login das Modal schließen:
    // this.closeLoginModal();
  }
}