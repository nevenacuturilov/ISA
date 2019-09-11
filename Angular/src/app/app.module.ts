import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { UpbarModule } from './shared/upbar/upbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';

// da li treba? i da li treba i ostalo?
import { KorisnikService } from './services/korisnik.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MailService } from './services/mail.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    UpbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  providers: [KorisnikService, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
