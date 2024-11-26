import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { MapComponent } from "./components/map/map.component";
import { GraphComponent } from "./components/graph/graph.component";
import { ExportPdfComponent } from "./components/export-pdf/export-pdf.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'export', component: ExportPdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
