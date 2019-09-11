import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministratorAviokompanijeService } from 'app/services/administrator-aviokompanije.service';
import { AdministratorAviokompanije } from 'app/models/administrator-aviokompanije';

@Component({
  selector: 'app-aa-profil',
  templateUrl: './aa-profil.component.html',
  styleUrls: ['./aa-profil.component.scss']
})
export class AaProfilComponent implements OnInit {

  private admini: AdministratorAviokompanije[];
  private admin: AdministratorAviokompanije;

  constructor(private adminService: AdministratorAviokompanijeService, private router: Router) { }

  ngOnInit() {
    this.admin = this.adminService.getter();
    // console.log('nisaaaaaaaaaaaaaaaaa' + this.admin.ime);


    this.adminService.getAdmins().subscribe((administrators) => {
      this.admini = administrators;
    }, (error) => {
      console.log(error);
    });
  }

  save() {
    /*this.adminService.setter(this.admin);
    this.admin = this.adminService.getter();*/
    this.adminService.updateAdmin(this.admin).subscribe((flight) => {
      this.router.navigate(['/aa-profil']);
    }, (error) => {
      console.log(error);
    });

    // this.adminService.setter(this.admin);


    const aa: AdministratorAviokompanije = this.adminService.getter();
    // console.log('nisaaaaaaaaaaaaaaaaa' + this.admin.ime + ' ' + aa.ime);
  }

}
