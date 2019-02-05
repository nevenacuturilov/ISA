import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { KorisnikService } from './services/korisnik.service';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './components/profil/profil.component';
import { AvioKompanijeComponent } from './components/avio-kompanije/avio-kompanije.component';
import { LetoviComponent } from './components/letovi/letovi.component';
import { HoteliComponent } from './components/hoteli/hoteli.component';
import { RentACarServisiComponent } from './components/rent-a-car-servisi/rent-a-car-servisi.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranicaComponent,
    ProfilComponent,
    AvioKompanijeComponent,
    LetoviComponent,
    HoteliComponent,
    RentACarServisiComponent,
    PrijavaComponent,
    RegistracijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [KorisnikService],
  bootstrap: [AppComponent]
})
export class AppModule { }
