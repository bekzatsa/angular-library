import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import * as path from "path";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
