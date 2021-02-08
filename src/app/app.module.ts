import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {MainComponent} from './layout/main/main.component';
import {MarkdownModule, MarkdownService} from "ngx-markdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
