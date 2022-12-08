import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../../services/process.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: string;
  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }

  searchProduct(){
    this.processService.filterProducts(this.searchText);
  }

}
