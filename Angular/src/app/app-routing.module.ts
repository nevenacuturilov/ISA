import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AvioKompanijeComponent } from './components/avio-kompanije/avio-kompanije.component';
import { LetoviComponent } from './components/letovi/letovi.component';
import { HoteliComponent } from './components/hoteli/hoteli.component';
import { RentACarServisiComponent } from './components/rent-a-car-servisi/rent-a-car-servisi.component';

const routes: Routes = [
  { path: '', redirectTo: '/pocetna-stranica', pathMatch: 'full' },
  { path: 'pocetna-stranica', component: PocetnaStranicaComponent,
    children: [
      { path: 'avio-kompanije', component: AvioKompanijeComponent},
      { path: 'letovi', component: LetoviComponent},
      { path: 'hotelii', component: HoteliComponent},
      { path: 'rent-a-car-servisi', component: RentACarServisiComponent},
    ]
  },
  { path: 'profil', component: ProfilComponent},
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
