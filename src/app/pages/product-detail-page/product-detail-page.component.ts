import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
product:any;
id:any;
  constructor(private dataService: DataService, private activatedRoute:ActivatedRoute) {
this.id=activatedRoute.snapshot.paramMap.get('id')
    dataService.getProductById(this.id).subscribe((data:any)=>{this.product= data.data})
   }

  ngOnInit(): void {
  }

}
