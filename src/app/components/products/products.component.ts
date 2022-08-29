import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  catId:any;
  subId:any;
   public baseUrl = 'http://rjtmobile.com/grocery/images/';
  constructor(dataService: DataService, private activatedRoute:ActivatedRoute, private router: Router) {

    if (this.router.url.includes('sub')){
      this.subId=this.activatedRoute.snapshot.paramMap.get('subId');

      dataService.getProductsBySubId(this.subId).subscribe((data: any) => {
      
        this.products = data.data;
      })

    }
    else{
       this.catId=this.activatedRoute.snapshot.paramMap.get('catId');

    dataService.getProductsByCatId(this.catId).subscribe((data: any) => {
   
      this.products = data.data;
    })
    }
   


 
  }

  ngOnInit(): void {
  }
  
  goToDetail(pdtId:any){
    this.router.navigateByUrl(`products/details/${pdtId}`)
  }
}
