import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router'; // <-- Importieren
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { CreateListingComponent } from './create-listing/create-listing.component';

// Definiere deine Routen (füge hier deine Route für 'inserat-erstellen' hinzu)
// Selbst wenn du noch keine Seite dafür hast, definiere den Pfad
export const routes: Routes = [
  {
    path: '', // Standardroute zeigt jetzt die ListingsPageComponent
    component: ListingsPageComponent
    // oder: loadComponent: () => import('./listings-page/listings-page.component').then(m => m.ListingsPageComponent)
  },
  {
    path: 'inserat-erstellen',
    component: CreateListingComponent
    // oder: loadComponent: () => import('./create-listing/create-listing.component').then(m => m.CreateListingComponent)
  },
  // ... andere Routen
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // <--- HIER den Router bereitstellen
    // Wenn du zusätzliche Router-Features brauchst (z.B. HashLocationStrategy):
    // provideRouter(routes, withHashLocation())
    // Wenn du Debugging brauchst:
    // provideRouter(routes, withDebugTracing())

    // ... andere Provider wie provideHttpClient() etc.
  ]
};