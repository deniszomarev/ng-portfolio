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
import { TuiModeModule } from '@taiga-ui/core';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [AppComponent, ZdHeaderComponent, ProjectsComponent],
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
    TuiModeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
