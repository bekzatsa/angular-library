import {Routes} from "@angular/router";

export const CONTENT_ROUTES: Routes = [
  {
    path: 'content',
    loadChildren: () => import('../../pages/content-pages/content.module').then(m => m.ContentModule)
  }
];
