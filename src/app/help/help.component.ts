import { Component, OnInit } from '@angular/core';
import { ApiService } from "../auth/api.service";
@Component({
  selector: 'app-admin',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
artikel: any; //??? any ?? automatisch

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  logout(){
    this.apiService.logout();
  }
}