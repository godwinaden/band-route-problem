import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsComponent} from "./components/clients/clients.component";
import {PricingComponent} from "./components/pricing/pricing.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {GraphComponent} from "./components/graph/graph.component";
import {HomeComponent} from "./components/home/home.component";
import {ChangeThemeComponent} from "./components/change-theme/change-theme.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'optimizer', component: GraphComponent},
  {path: 'change-theme', component: ChangeThemeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
