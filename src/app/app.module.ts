import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { TrendingBarComponent } from './components/trending-bar/trending-bar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CardGroupComponent } from './components/card-group/card-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    TrendingBarComponent,
    SmallCardComponent,
    BigCardComponent,
    CardGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
