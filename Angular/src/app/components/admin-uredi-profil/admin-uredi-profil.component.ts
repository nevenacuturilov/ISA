import { Component, OnInit } from '@angular/core';
import { AdministratorAviokompanije } from 'src/app/models/administratorAviokompanije';
import { AdministratorAviokompanijeService } from 'src/app/services/administrator-aviokompanije.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-uredi-profil',
  templateUrl: './admin-uredi-profil.component.html',
  styleUrls: ['./admin-uredi-profil.component.css']
})
export class AdminUrediProfilComponent implements OnInit {

  private admini: AdministratorAviokompanije[];
  private admin: AdministratorAviokompanije;

  constructor(private adminService: AdministratorAviokompanijeService, private router: Router) { }

  ngOnInit() {
    this.admin = this.adminService.getter();

    this.adminService.getAdmins().subscribe((administrators) => {
      this.admini = administrators;
    }, (error) => {
      console.log(error);
    });
  }

  save() {

    // Edit

    this.adminService.updateAdmin(this.admin).subscribe((administrator) => {
      this.router.navigate(['/admin-home', { outlets: { a: 'admin-profil' } }]);
    },
      (error) => {
        console.log(error);
      });
  }

}
