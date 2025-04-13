// src/app/components/property-card/property-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Importieren
import { Property } from '../models/property.model';

@Component({
  selector: 'app-property-card',
  standalone: true, // <-- Sicherstellen
  imports: [
    CommonModule // <--- Hier hinzufügen
  ],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  @Input() property: Property | null = null;
}
