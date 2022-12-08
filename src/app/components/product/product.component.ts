import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:ProductModel[] = [
    {name:"Peynir", price: 25.99, imageUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRz6l9msjxRGTX9ZfVEmJhre8LfmV7e72v22ll0QMxxWYYcpWjwwf5FVgHIzNnTyHPydWtb73xYHfcsJ5xYn9zJ5C0EOYeiCCLv0rp4joMl7iAQ7zXPEW489E&usqp=CAE"},
    {name:"Zeytin", price: 15.99, imageUrl:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSv1ea828D158mqA-3974l1qd6xXyiW5sY5ssdYJTXJ6IttUO_Kg3_xecjSBtdsFhF6dkzDjU4IU1zBc0hOk6nd1KO2-mFTj-ynQNMl5DrdkWDL-0J6psyu&usqp=CAE"},
    {name:"Tereyağı", price: 75.99, imageUrl:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRilFgFAsPIxBSVztTTE5REFM_RWrJNYHCb_Ps66Gzvd3MOx7o2GB4VX51rE6ZYHVE6yj5cJeCGVBh-EQ5Ao0iJcE-NyBahMb2-3kmGpUgkAHYfawOH77p6aA&usqp=CAE"},
    {name:"Aç Bitir Salam", price: 5.99, imageUrl:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAJ9ei7LqxYvauMJlJCoLaOsqEzyUhJNdeqak_DKxOrbFfttwiVm68HybF84z_00NUoiUVb6FnkfplSpeo6JcyB-DoNHOtYjr4XgTrhfDmvXlIaseREZ-Lgpw&usqp=CAE"}

  ]

  @Output() basket: BasketModel[];
  constructor() { }

  ngOnInit(): void {
  }

  addBasket(product:ProductModel){
    console.log({
      product: product,
      quantity: 2
    });
  }

}
