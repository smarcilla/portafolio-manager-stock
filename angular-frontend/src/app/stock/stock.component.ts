import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { STOCKS } from '../mock-stocks';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock: Stock = {
    id: 1,
    name: 'Gamesa',
    lastDateQuote: new Date(),
    lastQuote: 14.23
  };

  stocks = STOCKS;

  constructor() { }

  ngOnInit() {
  }

}
