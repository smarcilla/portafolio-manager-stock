import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService} from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks: Stock[];

  selectedStock: Stock;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.initializeStocks();
  }

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  initializeStocks(): void {
    this.stockService.getStocks()
    .subscribe(stocks => this.stocks = stocks);
  }

}
