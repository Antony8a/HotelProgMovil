import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  urlAdmin:string = "/admin";
  urlRecep:string = "/recepcionista";
  urlClient:string = "/cliente";
  constructor() { }

  ngOnInit() {
  }

}
