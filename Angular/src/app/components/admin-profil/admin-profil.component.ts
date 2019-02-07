import { Component, OnInit } from '@angular/core';
import { AdministratorAviokompanije } from 'src/app/models/administratorAviokompanije';
import { AdministratorAviokompanijeService } from 'src/app/services/administrator-aviokompanije.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { Aviokompanija } from 'src/app/models/aviokompanija';
import { AviokompanijaService } from 'src/app/services/aviokompanija.service';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.css']
})
export class AdminProfilComponent implements OnInit {

  private admini: AdministratorAviokompanije[];
  private admin: AdministratorAviokompanije;

  constructor(private adminService: AdministratorAviokompanijeService, private router: Router) { }

  ngOnInit() {
    this.admin = this.adminService.getter();
    console.log(this.admin);

    this.adminService.getAdmins().subscribe((administrators) => {
      this.admini = administrators;
    }, (error) => {
      console.log(error);
    });
  }

  edit() {
    this.router.navigate(['/admin-home', { outlets: { a: 'admin-uredi-profil' } }]);
  }


}
