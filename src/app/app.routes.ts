import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./details-page/details-page.component').then(
        (m) => m.DetailsPageComponent
      ),
  },
  {
    path: 'add-recipe',
    loadComponent: () =>
      import('./add-recipe-page/add-recipe-page.component').then(
        (m) => m.AddRecipePageComponent
      ),
  },
];
