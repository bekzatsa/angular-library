import {Routes} from "@angular/router";

export const CLIENT_ROUTES: Routes = [
  {
    path: 'public',
    loadChildren: () => import('../../pages/client-pages/client.module').then(m => m.ClientModule)
  }
];
