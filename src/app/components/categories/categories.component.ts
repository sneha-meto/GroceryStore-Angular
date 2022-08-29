import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: any[]=[];
  public baseUrl='http://rjtmobile.com/grocery/images/';

  constructor(dataService: DataService, private router: Router) {
dataService.getCategories().subscribe((data:any)=>{
  this.categories=data.data;
})
   }

  ngOnInit(): void {
  }

}
