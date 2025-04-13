// src/app/models/search-criteria.model.ts

export interface SearchCriteria {
    searchTerm?: string;       // z.B. für Ort oder Stichwort (optionales Feld: '?')
    propertyType?: string;     // z.B. 'Wohnung', 'Haus' (optional)
    minPrice?: number;         // Optional
    maxPrice?: number;         // Optional
    minArea?: number;          // Optional
    // Füge weitere Felder hinzu, die dein Suchformular verwendet
  }