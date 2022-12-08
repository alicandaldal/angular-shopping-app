import { Component, Input, OnInit } from '@angular/core';
import {ProcessService} from "../../services/process.service";
import {BasketModel} from "../../models/basket";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: BasketModel[] = [];
  total: number = 0;
  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
    this.processService.globalBasket$.subscribe((data: any) => {
      this.total = 0;
      if (data != null){
        this.basket = data;
        this.basket.forEach(item => {
          this.total += item.product.price * item.quantity;
        })
      }
    });
  }

  deleteProductFromBasket(basket: BasketModel){
    this.processService.deleteProductFromBasket(basket);
  }

}
