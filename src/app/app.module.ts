import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { GraphComponent } from './components/graph/graph.component';
import { ExportPdfComponent } from './components/export-pdf/export-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    GraphComponent,
    ExportPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
