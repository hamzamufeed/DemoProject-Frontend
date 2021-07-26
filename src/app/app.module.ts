import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { CurrencyComponent } from './currency/currency.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserItemComponent } from './users/users-list/user-item/user-item.component';
import {DropdownDirective} from "./dropdown.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { UserStartComponent } from './users/user-start/user-start.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import {UsersService} from "./users/users.service";
import {HttpClientModule} from "@angular/common/http";
import {BackendService} from "./backend.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    CurrencyComponent,
    HomeComponent,
    UsersListComponent,
    UserDetailComponent,
    UserItemComponent,
    DropdownDirective,
    UserStartComponent,
    UsersEditComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [UsersService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
