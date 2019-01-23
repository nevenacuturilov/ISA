import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranicaComponent } from './pocetna-stranica/pocetna-stranica.component';

const routes: Routes = [
  { path: '', redirectTo: '/pocetna-stranica', pathMatch: 'full' },
  { path: 'pocetna-stranica', component: PocetnaStranicaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
