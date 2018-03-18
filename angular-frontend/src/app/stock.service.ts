import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Stock } from './stock';
import { STOCKS} from './mock-stocks';

@Injectable()
export class StockService {

  constructor() { }

  getStocks(): Observable<Stock[]> {
    return of(STOCKS);
  }

}
