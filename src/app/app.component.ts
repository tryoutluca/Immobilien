// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
// --->>> IST DIESER IMPORT VORHANDEN? <<<---
import { PropertyListComponent } from './components/property-list/property-list.component';
import { Property } from './components/models/property.model';
import { PropertyService } from './services/property.service';

@Component({
  selector: 'app-root',
  standalone: true, // Sicherstellen, dass dies true ist
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SearchFormComponent,
    // --->>> IST PropertyListComponent HIER AUFGELISTET? <<<---
    PropertyListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
handleSearch($event: Event) {
throw new Error('Method not implemented.');
}
  // ... Rest des Codes ...

  // Stelle sicher, dass displayProperties hier existiert
  displayProperties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(data => {
      // ... Code zum Laden der Daten ...
      this.displayProperties = data; // Wird displayProperties hier zugewiesen?
    });
  }

  // ... handleSearch Methode ...
}