import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BasketModel} from "../models/basket";
import {ProductModel} from "../models/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  globalBasket$ = new BehaviorSubject<BasketModel[]>(null);
  globalProducts$ = new BehaviorSubject<ProductModel[]>(null);
  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts(){
    this.http.get('/assets/products.json').subscribe((data: any) => {
      this.globalProducts$.next(data);
    });
  }

  filterProducts(searchText: string){
    // @ts-ignore
    this.http.get('/assets/products.json').subscribe((data: ProductModel[]) => {
      data = data.filter(item => item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
      this.globalProducts$.next(data);
    });
  }

  setBasket(product: ProductModel) {
    let oldBasket = this.globalBasket$.value ?? [];
    let item = oldBasket.find(x => x.product.id == product.id);
    if (item){
      item.quantity = product.selectedQuantity;
    }else{
      oldBasket.push({product: product, quantity: product.selectedQuantity ?? 1});
    }
    //oldBasket = oldBasket.filter(item => item.product.id !== product.id);
    this.globalBasket$.next(oldBasket);
  }

  deleteProductFromBasket(basket: BasketModel){
    let oldBasket = this.globalBasket$.value ?? [];
    oldBasket = oldBasket.filter(item => item.product.id !== basket.product.id);
    this.globalBasket$.next(oldBasket);
  }
}
