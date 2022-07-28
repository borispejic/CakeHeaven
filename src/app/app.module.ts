import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './core/contact/contact.component';
import { ProfileComponent } from './core/profile/profile.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CakesComponent } from './cakes/cakes.component';
import { ItemComponent } from './cakes/item/item.component';
import { CakedetailComponent } from './cakes/cakedetail/cakedetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    NavbarComponent,
    CakesComponent,
    ItemComponent,
    CakedetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
