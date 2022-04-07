import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QuoteComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
