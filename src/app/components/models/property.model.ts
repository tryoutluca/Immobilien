// src/app/models/property.model.ts
export interface Property {
    id: number;
    title: string;
    address: string;
    price: number;
    currency: string; // z.B. 'CHF', 'EUR'
    type: 'Mieten' | 'Kaufen';
    propertyType: string; // z.B. 'Wohnung', 'Haus'
    rooms: number;
    area: number; // in m²
    imageUrl: string;
  }