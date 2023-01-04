import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import { HeaderComponent } from './Accueil/header/header.component';
import { GrandCarouselComponent } from './Accueil/grand-carousel/grand-carousel.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import { CarouselTypeComponent } from './Accueil/carousel-type/carousel-type.component';
import { TableauGestionComponent } from './Gestion_Video/tableau-gestion/tableau-gestion.component';
import { AjoutVideoComponent } from './Gestion_Video/ajout-video/ajout-video.component';
import { ModifVideoComponent } from './Gestion_Video/modif-video/modif-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GrandCarouselComponent,
    CarouselTypeComponent,
    TableauGestionComponent,
    AjoutVideoComponent,
    ModifVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
