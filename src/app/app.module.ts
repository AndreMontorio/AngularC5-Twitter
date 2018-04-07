import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, BrowserXhr } from '@angular/http';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';

import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AppService } from './app.service';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    NgbModule.forRoot(),
    MainModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppService,
    AuthGuard,

    { provide: BrowserXhr, useClass: CustExtBrowserXhr },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
