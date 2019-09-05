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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    UpbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,

  ],
  providers: [KorisnikService],
  bootstrap: [AppComponent]
})
export class AppModule { }
