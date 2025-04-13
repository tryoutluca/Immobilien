// src/app/services/property.service.ts
import { Injectable } from '@angular/core';
import { Property } from '../components/models/property.model';
import { of, Observable } from 'rxjs'; // Import Observable and 'of'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private mockProperties: Property[] = [
    {
      id: 1,
      title: 'Moderne Wohnung im Zentrum',
      address: 'Bahnhofstrasse 10, 8001 Zürich',
      price: 2500,
      currency: 'CHF',
      type: 'Mieten',
      propertyType: 'Wohnung',
      rooms: 3.5,
      area: 85,
      imageUrl: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=Wohnung+Bild'
    },
    {
      id: 2,
      title: 'Charmantes Einfamilienhaus mit Garten',
      address: 'Dorfweg 5, 3000 Bern',
      price: 950000,
      currency: 'CHF',
      type: 'Kaufen',
      propertyType: 'Haus',
      rooms: 5,
      area: 150,
      imageUrl: 'https://via.placeholder.com/300x200/DDDDDD/FFFFFF?text=Haus+Bild'
    },
    {
        id: 3,
        title: 'Helle Dachwohnung mit Aussicht',
        address: 'Seestrasse 45, 6000 Luzern',
        price: 1800,
        currency: 'CHF',
        type: 'Mieten',
        propertyType: 'Wohnung',
        rooms: 2.5,
        area: 60,
        imageUrl: 'https://via.placeholder.com/300x200/EEEEEE/FFFFFF?text=Dachwohnung+Bild'
      }
    // Füge hier weitere Beispielimmobilien hinzu
  ];

  constructor() { }

  // Gibt die Mock-Daten als Observable zurück (simuliert einen HTTP-Aufruf)
  getProperties(): Observable<Property[]> {
    // In einer echten Anwendung würdest du hier HttpClient verwenden
    return of(this.mockProperties);
  }

  // Beispiel für eine Suchfunktion (sehr vereinfacht)
  searchProperties(criteria: any): Observable<Property[]> {
     console.log('Suche mit Kriterien:', criteria);
     // Hier würde die Filterlogik basierend auf den Kriterien stehen
     // Für dieses Beispiel geben wir einfach alle zurück
     return of(this.mockProperties);
  }
}