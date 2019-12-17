import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SimpleComponent } from './simple/simple.component';
import { FancyTextComponent } from './fancy-text/fancy-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SimpleComponent,
    FancyTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
