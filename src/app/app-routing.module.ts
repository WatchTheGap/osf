import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ScannerComponent } from './scanner/scanner.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'create', component: CreateComponent},
  { path: 'event', component: EventComponent},
  { path: 'login', component: LoginComponent},
  { path: 'vendor/:id', component: VendorComponent},
  { path: 'vendor/:vendor_id/addsale/:user_id', component: AddSaleComponent},
  { path: 'scanner/:id', component: ScannerComponent},
  { path: 'admin', component: AdminComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: HomeComponent} //TODO: Probably should make a 404 page...

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
