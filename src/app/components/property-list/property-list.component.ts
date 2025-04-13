// src/app/components/property-list/property-list.component.ts
import { Component, Input, OnInit } from '@angular/core'; // --->>> Ist Input hier importiert? <<<---
import { CommonModule } from '@angular/common';
import { Property } from '../models/property.model';
import { PropertyCardComponent } from '../property-card/property-card.component';

@Component({
  selector: 'app-property-list',
  standalone: true, // --->>> Ist dies auf true gesetzt? <<<---
  imports: [
    CommonModule,
    PropertyCardComponent
  ],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  // --->>> Ist dieses Input korrekt geschrieben und nicht auskommentiert? <<<---
  @Input() properties: Property[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialisierungslogik, falls benötigt
  }
}