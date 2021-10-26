import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LogoComponent } from './components/logo/logo.component';
import { GraphComponent } from './components/graph/graph.component';
import { MovingBackgroundComponent } from './components/moving-background/moving-background.component';
import { LeftContentComponent } from './components/left-content/left-content.component';
import { RightContentComponent } from './components/right-content/right-content.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { InputViewComponent } from './components/graph/input-view/input-view.component';
import { ProgressViewComponent } from './components/graph/progress-view/progress-view.component';
import { OutputViewComponent } from './components/graph/output-view/output-view.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    GraphComponent,
    MovingBackgroundComponent,
    LeftContentComponent,
    RightContentComponent,
    ContactUsComponent,
    ClientsComponent,
    PricingComponent,
    InputViewComponent,
    ProgressViewComponent,
    OutputViewComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
