import { Component, OnInit } from '@angular/core';

import { AuthService } from 'ng5plus-auth';

import { HttpClient } from '@angular/common/http';
import { httpRoutes } from '../../http-routes';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  loggedUser: any;
  apiResponse: any;

  constructor(private authService: AuthService, private httpClient: HttpClient) {
    this.loggedUser = authService.getLoggedUserInfo();
  }

  ngOnInit() {
  }

  logout() {
    console.log('LOGOUT:: ');
    this.authService.logout();
  }

  testCustomerEndpoint() {
    this.httpClient.get(httpRoutes.customer.test)
      .subscribe(
        apiRes => {
          console.log(apiRes);
          this.apiResponse = apiRes;
        },
        err => {
          console.error(err);
        }
      );
  }

}
