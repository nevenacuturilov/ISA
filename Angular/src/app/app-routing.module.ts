import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { HomeComponent } from './components/home/home.component';
import { AvioKompanijeComponent } from './components/avio-kompanije/avio-kompanije.component';
import { LetoviComponent } from './components/letovi/letovi.component';
import { HoteliComponent } from './components/hoteli/hoteli.component';
import { RentACarServisiComponent } from './components/rent-a-car-servisi/rent-a-car-servisi.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RezervacijeComponent } from './components/rezervacije/rezervacije.component';
import { UrediProfilComponent } from './components/uredi-profil/uredi-profil.component';

const routes: Routes = [
  { path: '', redirectTo: '/pocetna-stranica', pathMatch: 'full' },
  {
    path: 'pocetna-stranica', component: PocetnaStranicaComponent,
    children: [
      { path: '', component: PrijavaComponent, outlet: 'p' },
      { path: 'prijava', component: PrijavaComponent, outlet: 'p' },
      { path: 'reg', component: RegistracijaComponent, outlet: 'p' },
      { path: 'avio-kompanije', component: AvioKompanijeComponent, outlet: 'p' },
      { path: 'letovi', component: LetoviComponent, outlet: 'p' },
      { path: 'hoteli', component: HoteliComponent, outlet: 'p' },
      { path: 'rent-a-car-servisi', component: RentACarServisiComponent, outlet: 'p' },
    ]
  },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: ProfilComponent, outlet: 'pro' },
      { path: 'profil', component: ProfilComponent, outlet: 'pro' },
      { path: 'urediProfil', component: UrediProfilComponent, outlet: 'pro' },
      { path: 'rezervacije', component: RezervacijeComponent, outlet: 'pro' },
      { path: 'avio-kompanije', component: AvioKompanijeComponent, outlet: 'pro' },
      { path: 'letovi', component: LetoviComponent, outlet: 'pro' },
      { path: 'hoteli', component: HoteliComponent, outlet: 'pro' },
      { path: 'rent-a-car-servisi', component: RentACarServisiComponent, outlet: 'pro' },
      // { path: 'prijatelji', component: PrijateljiComponent, outlet: 'pro'},

    ]
  },
  { path: 'avio-kompanije', component: AvioKompanijeComponent },
  { path: 'letovi', component: LetoviComponent },
  { path: 'hoteli', component: HoteliComponent },
  { path: 'rent-a-car-servisi', component: RentACarServisiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
