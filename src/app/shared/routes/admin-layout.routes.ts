import {Routes} from "@angular/router";

export const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../../pages/admin-pages/admin.module').then(m => m.AdminModule)
  }
];
