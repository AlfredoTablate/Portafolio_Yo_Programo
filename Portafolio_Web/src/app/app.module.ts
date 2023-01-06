import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { LogoAPComponent } from './componets/logo-ap/logo-ap.component';
import { SocialComponent } from './componets/social/social.component';
import { BannerComponent } from './componets/banner/banner.component';
import { AcercaDeComponent } from './componets/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';
import { EducacionComponent } from './componets/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
