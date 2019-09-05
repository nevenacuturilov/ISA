import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { LayoutRoutes } from './layout.routing';

import { HomeComponent } from '../elements/tema/home/home.component';
import { UserComponent } from '../elements/tema/user/user.component';
import { TablesComponent } from '../elements/tema/tables/tables.component';
import { TypographyComponent } from '../elements/tema/typography/typography.component';
import { IconsComponent } from '../elements/tema/icons/icons.component';
import { MapsComponent } from '../elements/tema/maps/maps.component';
import { NotificationsComponent } from '../elements/tema/notifications/notifications.component';
import { UpgradeComponent } from '../elements/tema/upgrade/upgrade.component';

import { RegistracijaComponent } from 'app/elements/registracija/registracija.component';
import { AviokompanijaComponent } from 'app/elements/aviokompanija/aviokompanija.component';
import { LetComponent } from 'app/elements/let/let.component';
import { LetoviComponent } from 'app/elements/letovi/letovi.component';
import { UrediProfilComponent } from 'app/elements/uredi-profil/uredi-profil.component';
import { AviokompanijePrikazComponent } from 'app/elements/aviokompanije-prikaz/aviokompanije-prikaz.component';
import { AviokompanijaPrikazComponent } from 'app/elements/aviokompanija-prikaz/aviokompanija-prikaz.component';
import { LetPrikazComponent } from 'app/elements/let-prikaz/let-prikaz.component';
import { LetoviPrikazComponent } from 'app/elements/letovi-prikaz/letovi-prikaz.component';
import { PocetnaStranicaComponent } from 'app/elements/pocetna-stranica/pocetna-stranica.component';
import { AviokompanijeComponent } from 'app/elements/aviokompanije/aviokompanije.component';
import { KorisnikProfilComponent } from 'app/elements/korisnik-profil/korisnik-profil.component';
import { KorisnikService } from 'app/services/korisnik.service';
import { PrijavaComponent } from 'app/elements/prijava/prijava.component';
import { DestinacijeComponent } from 'app/elements/destinacije/destinacije.component';
import { AtinaComponent } from 'app/elements/destinacije/atina/atina.component';
import { RimComponent } from 'app/elements/destinacije/rim/rim.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RegistracijaComponent,
    AviokompanijaComponent,
    LetComponent,
    LetoviComponent,
    UrediProfilComponent,
    AviokompanijePrikazComponent,
    AviokompanijaPrikazComponent,
    LetPrikazComponent,
    LetoviPrikazComponent,
    PocetnaStranicaComponent,
    AviokompanijeComponent,
    KorisnikProfilComponent,
    PrijavaComponent,
    DestinacijeComponent,
    AtinaComponent,
    RimComponent,
  ],
  providers: [KorisnikService],
})

export class LayoutModule {}
