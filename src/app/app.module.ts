import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CreateComponent } from './create/create.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TermsComponent } from './terms/terms.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerComponent } from './scanner/scanner.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { AddSaleFormComponent } from './add-sale-form/add-sale-form.component';
import { EventComponent } from './event/event.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { SumPipe } from './sum.pipe';
import { AdminComponent } from './admin/admin.component';
import { WinnersListComponent } from './winners-list/winners-list.component';
import { AuthService } from './auth.service';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactFormComponent,
    HomeComponent,
    NavComponent,
    CreateComponent,
    SignupFormComponent,
    TermsComponent,
    SuccessComponent,
    LoginComponent,
    VendorComponent,
    LoginFormComponent,
    DashboardComponent,
    SalesListComponent,
    ScannerComponent,
    AddSaleComponent,
    AddSaleFormComponent,
    EventComponent,
    VendorListComponent,
    VendorDetailComponent,
    SumPipe,
    AdminComponent,
    WinnersListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ZXingScannerModule
    ],
    exports: [
      SumPipe
    ],

  providers: [
    ContactService,
    AuthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
