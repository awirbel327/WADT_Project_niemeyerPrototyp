import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../auth/api.service";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
artikel: any; 

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  logout(){
    this.apiService.logout();
  }
}
