import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZdHeaderComponent } from './base-ui/zd-header/zd-header.component';
import { TuiTabsModule } from '@taiga-ui/kit';
import { BoldDirective } from './shared/directives/bold.directive';
import { MirrowDirective } from './shared/directives/mirror.directive';

@NgModule({
  declarations: [AppComponent, ZdHeaderComponent, BoldDirective, MirrowDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiTabsModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiSvgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
