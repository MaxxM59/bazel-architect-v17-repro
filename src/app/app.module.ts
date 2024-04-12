import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibAModule } from 'lib-a';

import { AppComponent } from './app.component';
import { DragulaComponent } from './dragula.component';

@NgModule({
  declarations: [AppComponent, DragulaComponent],
  imports: [BrowserModule, LibAModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
