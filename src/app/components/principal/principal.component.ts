import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private accountsService: AccountsService
  ) { }

  user: any;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')) || {};
  }

  logOut(){
    this.accountsService.logout();
  }

}
