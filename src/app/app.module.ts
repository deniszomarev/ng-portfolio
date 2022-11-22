import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiSvgModule,
  TuiButtonModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZdHeaderComponent } from './base-ui/zd-header/zd-header.component';
import { TuiIslandModule, TuiTabsModule } from '@taiga-ui/kit';
import { TuiModeModule } from '@taiga-ui/core';
import { ProjectsComponent } from './projects/projects.component';
import { CardComponent } from './base-ui/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ZdHeaderComponent,
    ProjectsComponent,
    CardComponent,
  ],
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
    TuiIslandModule,
    TuiButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
