import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importiere die Kind-Komponenten und ggf. benötigte Module/Services
import { SearchFormComponent } from '../components/search-form/search-form.component';
import { PropertyListComponent } from '../components/property-list/property-list.component';
// Importiere deine Datenmodelle und Services
import { SearchCriteria } from '../components/models/search-criteria.model';
import { Property } from '../components/models/property.model';
import { PropertyService } from '../services/property.service'; // Beispiel, Pfad anpassen

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchFormComponent, // Importiere die Kind-Komponenten
    PropertyListComponent
  ],
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.scss']
})
export class ListingsPageComponent implements OnInit {
  allProperties: Property[] = []; // Alle Immobilien vom Service
  displayProperties: Property[] = []; // Die aktuell angezeigten (gefilterten)

  // PropertyService injizieren (Beispiel)
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    // Lade initial alle Immobilien (Beispiel)
    this.loadProperties();
  }

  loadProperties(): void {
    // Beispiel: Daten vom Service holen
    this.propertyService.getProperties().subscribe(properties => {
      this.allProperties = properties;
      this.displayProperties = properties; // Initial alle anzeigen
    });
  }

  // Diese Methode kommt von app.component.ts hierher
  handleSearch(criteria: SearchCriteria): void {
    console.log('Search criteria received in ListingsPage:', criteria);
    // Filterlogik anwenden...
    this.displayProperties = this.allProperties.filter(property => {
      // Deine Filterlogik basierend auf 'criteria' hier einfügen
      // Beispiel: Einfacher Filter nach Typ (falls vorhanden)
      if (criteria.propertyType && property.propertyType !== criteria.propertyType) {
         return false;
      }
      // Füge weitere Filterbedingungen hinzu...
      return true; // Property anzeigen, wenn alle Bedingungen passen
    });
  }
}