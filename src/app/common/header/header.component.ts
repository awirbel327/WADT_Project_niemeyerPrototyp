import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from "../../auth/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Observable<boolean>;

  

  constructor(private apiService:ApiService, private router: Router) {
    this.isLoggedIn = this.apiService.isLoggedIn();
    console.log(this.isLoggedIn);
  }

  ngOnInit() {
  }

  logout(){
    this.apiService.logout();
  }

  help(){
    this.router.navigate(['/help']);
  }
}
