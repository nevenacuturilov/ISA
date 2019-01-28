import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { KorisnikService } from './services/korisnik.service';


@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [KorisnikService],
  bootstrap: [AppComponent]
})
export class AppModule { }
