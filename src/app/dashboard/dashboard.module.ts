import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';

import { routing } from './dashboard.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DashboardService } from './services/dashboard.service';

import { AuthGuard } from '../auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatDialogModule, MatButtonModule, MatIconModule, MatToolbarModule
} from "@angular/material";
import { BrowserModule } from '@angular/platform-browser';


import { SetupService } from './services/setup.service';
import { HttpClientModule } from '@angular/common/http';
import { AddDialogComponent } from './home/dialogs/add/add.component';
import { EditDialogComponent } from './home/dialogs/edit/edit.component';
import { DeleteComponent } from './home/dialogs/delete/delete.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  declarations: [RootComponent, HomeComponent, SettingsComponent, AddDialogComponent, EditDialogComponent, DeleteComponent],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent  
  ],
  exports: [],
  providers: [AuthGuard, DashboardService, SetupService]
})
export class DashboardModule { }
