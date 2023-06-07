import {PreloadingStrategy, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {ADMIN_ROUTES} from "./shared/routes/admin-layout.routes";
import {ClientLayoutComponent} from "./layouts/client-layout/client-layout.component";
import {CLIENT_ROUTES} from "./shared/routes/client-layout.routes";
import {ContentLayoutComponent} from "./layouts/content-layout/content-layout.component";
import {CONTENT_ROUTES} from "./shared/routes/content-layout.routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public/main',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: ADMIN_ROUTES
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children: CLIENT_ROUTES
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
