import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { ProductModel } from 'src/app/models/product';
import {ProcessService} from "../../services/process.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductModel[];
  @Output() basket: BasketModel[];
  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
    this.processService.globalProducts$.subscribe(data => {
      this.products = data;
    });
  }

  addBasket(product:ProductModel){
    this.processService.setBasket(product);
  }

}
