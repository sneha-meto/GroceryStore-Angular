import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  subCategories: any[] = [];
  catId: any;
  constructor(dataService: DataService, private activatedRoute: ActivatedRoute, private router : Router) {


  this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    dataService.getSubcategoryByCatId(this.catId).subscribe((data: any) => {
      this.subCategories = data.data;
    
    })



  
  }

  ngOnInit(): void {
  }

}
