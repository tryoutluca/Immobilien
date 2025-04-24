// src/app/components/search-form/search-form.component.ts
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // CommonModule für ngClass benötigt

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ FormsModule, CommonModule ], // CommonModule hinzufügen
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() search = new EventEmitter<any>();

  searchCriteria = {
    location: '',
    price: 'alle', // Standard auf 'alle' setzen, passt besser zum Bild
    type: 'Mieten',  // Standardmäßig 'Mieten' ausgewählt
    propertyType: '',
    rooms: 'alle' // Beispiel für Zimmer, falls benötigt
    // Füge hier weitere Kriterien hinzu, die im Bild zu sehen sind (z.B. Zimmer)
  };

  priceOptions: string[] = [];
  // Optional: Füge Optionen für Zimmer hinzu, falls du das "Zimmer von"-Dropdown auch implementieren möchtest
  roomOptions: string[] = ['alle', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5+'];

  constructor() { }

  ngOnInit(): void {
    this.generatePriceOptions();
    // Setze den initialen Preis auf 'alle', wenn die Optionen generiert wurden
    if (!this.priceOptions.includes(this.searchCriteria.price)) {
        this.searchCriteria.price = 'alle';
    }
  }

  generatePriceOptions(): void {
    const minPrice = 500;
    const maxPrice = 10000;
    const step = 500;
    // Füge 'alle' als erste Option hinzu
    this.priceOptions.push('alle');

    for (let price = minPrice; price <= maxPrice; price += step) {
      // Formatieren als Währung oder einfacher String
      // this.priceOptions.push(`${price.toLocaleString('de-CH')} CHF`); // Option mit Formatierung
      this.priceOptions.push(`${price}`); // Einfacher Zahlenwert oder String wie '500'
    }
    // Optional: 'Kein Limit' etc.
  }

  // --- NEUE METHODE zum Setzen des Typs ---
  selectType(type: 'Mieten' | 'Kaufen'): void {
    this.searchCriteria.type = type;
    // Optional: Hier könntest du Logik hinzufügen,
    // z.B. Preisoptionen ändern, wenn zwischen Mieten/Kaufen gewechselt wird
    console.log('Typ geändert zu:', this.searchCriteria.type);
  }

  onSearchSubmit(): void {
    console.log('Suchkriterien gesendet:', this.searchCriteria);
  
    // Cast to Record<string, any> or simply `any`
    const criteriaToSend: { [key: string]: any } = { ...this.searchCriteria };
    // Alternatively: const criteriaToSend = { ...this.searchCriteria } as any;
  
    if (criteriaToSend['price'] === 'alle') {
      delete criteriaToSend['price']; // Now allowed because the type permits deletion
    }
    if (criteriaToSend['rooms'] === 'alle') {
      delete criteriaToSend['rooms']; // Now allowed
    }
  
    console.log('Bereinigte Kriterien:', criteriaToSend);
    this.search.emit(criteriaToSend);
  }

  // Optional: Methode für den Filter-Button
  openFilters(): void {
    console.log('Filter öffnen...');
    // Hier Logik zum Öffnen eines Modals oder Anzeigen weiterer Filter implementieren
  }
}