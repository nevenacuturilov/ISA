import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
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
import { AdminProfilComponent } from './components/admin-profil/admin-profil.component';
import { AdminUrediProfilComponent } from './components/admin-uredi-profil/admin-uredi-profil.component';
import { AdminLetoviComponent } from './components/admin-letovi/admin-letovi.component';
import { AdminAviokompanijeComponent } from './components/admin-aviokompanije/admin-aviokompanije.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminUrediAviokompanijuComponent } from './components/admin-uredi-aviokompaniju/admin-uredi-aviokompaniju.component';

const routes: Routes = [
  { path: '', redirectTo: '/pocetna-stranica', pathMatch: 'full' },
  {
    path: 'pocetna-stranica', component: PocetnaStranicaComponent,
    children: [
      { path: '', component: PrijavaComponent, outlet: 'p' },
      { path: 'prijava', component: PrijavaComponent, outlet: 'p' },
      { path: 'reg', component: RegistracijaComponent, outlet: 'p' },
      { path: 'avio-kompanije', component: AviokompanijeComponent, outlet: 'p' },
      { path: 'letovi', component: LetoviComponent, outlet: 'p' },
      { path: 'hoteli', component: HoteliComponent, outlet: 'p' },
      { path: 'rent-a-car-servisi', component: RentACarServisiComponent, outlet: 'p' },
    ]
  },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: ProfilComponent, outlet: 'h' },
      { path: 'profil', component: ProfilComponent, outlet: 'h' },
      { path: 'uredi-profil', component: UrediProfilComponent, outlet: 'h' },
      { path: 'rezervacije', component: RezervacijeComponent, outlet: 'h' },
      { path: 'avio-kompanije', component: AviokompanijeComponent, outlet: 'h' },
      { path: 'letovi', component: LetoviComponent, outlet: 'h' },
      { path: 'hoteli', component: HoteliComponent, outlet: 'h' },
      { path: 'rent-a-car-servisi', component: RentACarServisiComponent, outlet: 'h' },
      // { path: 'prijatelji', component: PrijateljiComponent, outlet: 'h'},

    ]
  },
  {
    path: 'admin-home', component: AdminHomeComponent, children: [
      { path: '', component: AdminAviokompanijeComponent, outlet: 'a' },
      { path: 'admin-aviokompanije', component: AdminAviokompanijeComponent, outlet: 'a' },
      { path: 'admin-uredi-aviokompaniju', component: AdminUrediAviokompanijuComponent, outlet: 'a' },
      { path: 'admin-letovi', component: AdminLetoviComponent, outlet: 'a' },
      // { path: 'admin-izvestaji', component: HoteliComponent, outlet: 'a' },
      { path: 'admin-profil', component: AdminProfilComponent, outlet: 'a' },
      { path: 'admin-uredi-profil', component: AdminUrediProfilComponent, outlet: 'a' }
    ]
  },
  { path: 'avio-kompanije', component: AviokompanijeComponent },
  { path: 'letovi', component: LetoviComponent },
  { path: 'hoteli', component: HoteliComponent },
  { path: 'rent-a-car-servisi', component: RentACarServisiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
