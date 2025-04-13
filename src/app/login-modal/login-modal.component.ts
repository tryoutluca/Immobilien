import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf etc.
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-login-modal',
  standalone: true, // Assuming Angular 14+ with standalone components
  imports: [CommonModule, FormsModule], // Import necessary modules
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  // Output Event, um dem Parent (HeaderComponent) mitzuteilen, dass das Modal geschlossen werden soll
  @Output() close = new EventEmitter<void>();
  // Output Event, um die Login-Daten zu senden (optional, aber nützlich)
  @Output() loginSubmit = new EventEmitter<any>(); // Sende 'any' oder ein spezifisches Login-Interface

  // Datenmodell für das Formular
  loginData = {
    username: '',
    password: ''
  };

  // Methode zum Schließen des Modals (z.B. bei Klick auf 'x' oder Backdrop)
  closeModal(): void {
    this.close.emit();
  }

  // Methode zum Verarbeiten des Formular-Submits
  onSubmit(): void {
    console.log('Login attempt:', this.loginData);
    // Hier würdest du normalerweise einen Service aufrufen, um die Daten ans Backend zu senden
    this.loginSubmit.emit(this.loginData);
    // Optional: Modal nach dem Senden schließen
    // this.closeModal();
  }

  // Verhindert, dass Klick im Modal-Inhalt das Modal schließt (wird im Template verwendet)
  onContentClick(event: Event): void {
    event.stopPropagation();
  }
}
