import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { CounterComponent } from './counter/counter.component';
import { VoteDirective } from './vote.directive';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { CounterComponent } from './counter/counter.component';
// import { FontAwesomeDemoComponent } from './font-awesome-demo/font-awesome-demo.component'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QuoteComponent,
    QuoteDetailComponent,
    VoteDirective,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    // library.add(fas, faArrowUp);
  }
}
