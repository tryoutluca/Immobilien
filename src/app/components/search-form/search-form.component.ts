// src/app/components/search-form/search-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core'; // Stelle sicher, dass EventEmitter und Output importiert sind
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  // Stelle sicher, dass der @Output search Emitter existiert
  @Output() search = new EventEmitter<any>();

  searchCriteria = {
    location: '',
    type: 'Mieten',
    propertyType: ''
  };

  constructor() { }

  // --- HIER IST DIE METHODE ---
  onSearchSubmit(): void { // Rückgabetyp void ist optional, aber gute Praxis
    // Entferne diese Zeile, falls sie existiert: throw new Error('Method not implemented.');

    // Füge die Logik hinzu, die wir wollen:
    console.log('Suchkriterien gesendet:', this.searchCriteria);
    // Sende die aktuellen Suchkriterien über den Emitter an die Parent-Komponente (AppComponent)
    this.search.emit(this.searchCriteria);
  }
}