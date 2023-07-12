import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersatileboxComponent } from './comps/versatilebox/versatilebox.component';
import { HomePageComponent } from './comps/home-page/home-page.component';
import { FlashboxComponent } from './comps/flashbox/flashbox.component';
import { ParaspecboxComponent } from './comps/paraspecbox/paraspecbox.component';
import { SitefooterComponent } from './comps/sitefooter/sitefooter.component';
import { SiteheaderComponent } from './comps/siteheader/siteheader.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VersatileboxComponent,
    HomePageComponent,
    FlashboxComponent,
    ParaspecboxComponent,
    SitefooterComponent,
    SiteheaderComponent,
    NavbarComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
