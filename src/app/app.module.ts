import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppUIModule } from './app.ui.module';

import { MseService } from './mse/mse.service';
import { EmeService } from './eme/eme.service';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppUIModule
  ],
  providers: [
    MseService,
    EmeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
