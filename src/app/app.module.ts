import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { CounterComponent } from './counter/counter.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightDirective } from './highlight.directive';

// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faArrowUp, faArrowDown, fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QuoteComponent,
    QuoteDetailComponent,
    CounterComponent,
    DateCountPipe,
    QuoteFormComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(library: FaIconLibrary){
    // library.addIconPacks(fas);
    // library.addIcons(faArrowUp);
    // library.addIcons(faArrowDown);
  }
// }
