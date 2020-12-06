import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './sections/counter/counter.component';
import { ItemsBoardComponent } from './sections/items-board/items-board.component';
import { ItemsComponent } from './sections/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ItemsBoardComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
