import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    StockDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
