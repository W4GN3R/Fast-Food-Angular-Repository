
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BobsComponent } from './Bobs/Bobs.component';
import { McDonaldsComponent } from './mc-donalds/mc-donalds.component';
import { AppRoutingModule } from './app-routing.module';
import { BkComponent } from './bk/bk.component';

@NgModule({
  declarations: [
    AppComponent,
    BobsComponent,
    McDonaldsComponent,
    BkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
