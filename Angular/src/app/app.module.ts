import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { KorisnikService } from './services/korisnik.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AviokompanijeComponent } from './components/aviokompanije/aviokompanije.component';
import { LetoviComponent } from './components/letovi/letovi.component';
import { HoteliComponent } from './components/hoteli/hoteli.component';
import { RentACarServisiComponent } from './components/rent-a-car-servisi/rent-a-car-servisi.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RezervacijeComponent } from './components/rezervacije/rezervacije.component';
import { UrediProfilComponent } from './components/uredi-profil/uredi-profil.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProfilComponent } from './components/admin-profil/admin-profil.component';
import { AdminUrediProfilComponent } from './components/admin-uredi-profil/admin-uredi-profil.component';
import { AdminLetoviComponent } from './components/admin-letovi/admin-letovi.component';
import { AdminAviokompanijeComponent } from './components/admin-aviokompanije/admin-aviokompanije.component';
import { AdminUrediAviokompanijuComponent } from './components/admin-uredi-aviokompaniju/admin-uredi-aviokompaniju.component';
import { AdminUrediLetComponent } from './components/admin-uredi-let/admin-uredi-let.component';
import { AdminPrikaziAviokompanijuComponent } from './components/admin-prikazi-aviokompaniju/admin-prikazi-aviokompaniju.component';
import { AdminPrikaziLetComponent } from './components/admin-prikazi-let/admin-prikazi-let.component';
import { PrikazAviokompanijaComponent } from './components/prikaz-aviokompanija/prikaz-aviokompanija.component';
import { PrikazAviokompanijeComponent } from './components/prikaz-aviokompanije/prikaz-aviokompanije.component';
import { AviokompanijaComponent } from './components/aviokompanija/aviokompanija.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranicaComponent,
    HomeComponent,
    AviokompanijeComponent,
    LetoviComponent,
    HoteliComponent,
    RentACarServisiComponent,
    PrijavaComponent,
    RegistracijaComponent,
    ProfilComponent,
    RezervacijeComponent,
    UrediProfilComponent,
    AdminHomeComponent,
    AdminProfilComponent,
    AdminUrediProfilComponent,
    AdminLetoviComponent,
    AdminAviokompanijeComponent,
    AdminUrediAviokompanijuComponent,
    AdminUrediLetComponent,
    AdminPrikaziAviokompanijuComponent,
    AdminPrikaziLetComponent,
    PrikazAviokompanijaComponent,
    PrikazAviokompanijeComponent,
    AviokompanijaComponent
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
