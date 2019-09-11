import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aa-home',
  templateUrl: './aa-home.component.html',
  styleUrls: ['./aa-home.component.scss']
})
export class AaHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  a() {
    this.router.navigate(['/aa-aviokompanije']);

  }

  l() {
    this.router.navigate(['/aa-letovi']);

  }
}
