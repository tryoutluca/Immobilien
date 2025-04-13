import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Wichtig: ReactiveForms Module importieren
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Router für evtl. Weiterleitung nach Erfolg, RouterModule für routerLink im Template

@Component({
  selector: 'app-create-listing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // <-- ReactiveFormsModule hinzufügen
    RouterModule       // <-- RouterModule für [routerLink]
  ],
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit { // OnInit implementieren

  listingForm!: FormGroup; // Das Ausrufezeichen sagt TypeScript, dass wir uns sicher sind, dass es initialisiert wird (in ngOnInit)
  isLoading = false;      // Optional: Für Ladezustand beim Senden
  submitted = false;      // Um zu steuern, wann Validierungsfehler angezeigt werden

  // Beispiel-Optionen für den Immobilientyp
  propertyTypes: string[] = ['Wohnung', 'Haus', 'Grundstück', 'Büro', 'WG-Zimmer'];

  // FormBuilder und Router injizieren
  constructor(
    private fb: FormBuilder,
    private router: Router // Optional: Um nach Erfolg wegzunavigieren
  ) {}

  ngOnInit(): void {
    // Formular beim Initialisieren der Komponente erstellen
    this.listingForm = this.fb.group({
      // FormControlName: [InitialValue, [Validators]]
      title: ['', Validators.required], // Zusätzliches Feld: Titel des Inserats
      description: ['', Validators.required],
      propertyType: ['', Validators.required], // Wird ein <select> sein
      rooms: [null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+(\.[05])?$")]], // Zahl, mind. 1, erlaubt .5 Schritte
      area: [null, [Validators.required, Validators.min(1)]], // Zahl, mind. 1 qm
      // Adresse könnte komplexer sein (Straße, PLZ, Stadt), hier erstmal als ein Feld
      address: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]], // Zahl, mind. 0
      // Optional: Weitere Felder nach Bedarf hinzufügen
      // availableFrom: [null], // z.B. Datum
      // features: this.fb.array([]) // z.B. für Checkboxen (Balkon, Garage...)
    });
  }

  // Getter für einfachen Zugriff auf Formular-Controls im Template (für Fehlermeldungen)
  get f() { return this.listingForm.controls; }

  onSubmit(): void {
    this.submitted = true; // Markieren, dass versucht wurde zu senden

    // Stoppen, wenn das Formular ungültig ist
    if (this.listingForm.invalid) {
      console.warn('Formular ist ungültig. Bitte Eingaben prüfen.');
      // Optional: Fokus auf das erste invalide Feld setzen
      this.findInvalidControlsAndFocus();
      return;
    }

    // Wenn das Formular gültig ist:
    this.isLoading = true; // Ladeanzeige starten (optional)
    console.log('Formulardaten:', this.listingForm.value);

    // --- HIER WÜRDE DIE LOGIK KOMMEN, UM DIE DATEN ZU SENDEN ---
    // Normalerweise würdest du hier einen Service aufrufen, der einen HTTP-Request
    // an dein Backend sendet, um das Inserat zu speichern.
    // Beispiel (auskommentiert):
    // this.listingService.create(this.listingForm.value).subscribe({
    //   next: (response) => {
    //     console.log('Inserat erfolgreich erstellt:', response);
    //     this.isLoading = false;
    //     alert('Inserat erfolgreich erstellt!');
    //     // Optional: Zur Detailseite des neuen Inserats oder zur Übersicht navigieren
    //     // this.router.navigate(['/listings', response.id]);
    //     this.listingForm.reset(); // Formular zurücksetzen
    //     this.submitted = false; // Submitted-Status zurücksetzen
    //   },
    //   error: (error) => {
    //     console.error('Fehler beim Erstellen des Inserats:', error);
    //     this.isLoading = false;
    //     alert('Fehler beim Speichern des Inserats. Bitte versuchen Sie es erneut.');
    //   }
    // });

    // Nur zur Demo (da kein Backend): Simulieren einer Verzögerung und Erfolg
    setTimeout(() => {
       console.log('Demo: Daten "gesendet".');
       this.isLoading = false;
       alert('Demo: Inserat erfolgreich erstellt! (Keine echten Daten gesendet)');
       this.listingForm.reset(); // Formular zurücksetzen
       Object.keys(this.listingForm.controls).forEach(key => { // Workaround, um Validierungsstatus nach reset zu löschen
           const control = this.listingForm.get(key);
           if (control) {
               control.setErrors(null);
               control.markAsPristine();
               control.markAsUntouched();
           }
       });
       this.submitted = false; // Submitted-Status zurücksetzen
       // Optional: Zurück zur Startseite
       // this.router.navigate(['/']);
    }, 1500); // 1.5 Sekunden warten
  }

  // Hilfsfunktion, um das erste invalide Feld zu finden und zu fokussieren
  private findInvalidControlsAndFocus() {
    const invalidControls = Object.keys(this.listingForm.controls)
      .filter(key => this.listingForm.controls[key].invalid);

    if (invalidControls.length > 0) {
      const firstInvalidKey = invalidControls[0];
      const element = document.querySelector(`[formControlName="${firstInvalidKey}"]`);
      if (element instanceof HTMLElement) {
        element.focus();
      }
    }
  }
}