import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

/* Account Imports */
import { AccountModule }  from './account/account.module';

import { EmployeeModule } from './employee/employee.module';

/* Dashboard Imports */
import { DashboardModule }  from './dashboard/dashboard.module';

import { ConfigService } from './shared/utils/config.service';
import { HeaderNavComponent } from './shared/header-nav/header-nav/header-nav.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { AsideNavComponent } from './shared/aside-nav/aside-nav.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { QuickSidebarComponent } from './shared/quick-sidebar/quick-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderNavComponent,
    FooterComponent,
    AsideNavComponent,
    LayoutComponent,
    QuickSidebarComponent],
  imports: [
    AccountModule,
    DashboardModule,
    EmployeeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ConfigService, { 
    provide: XHRBackend, 
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
