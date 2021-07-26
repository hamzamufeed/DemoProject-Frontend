import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {CurrencyComponent} from "./currency/currency.component";
import {UserStartComponent} from "./users/user-start/user-start.component";
import {UserDetailComponent} from "./users/user-detail/user-detail.component";
import {UsersEditComponent} from "./users/users-edit/users-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: '', component: UserStartComponent},
      { path: 'new', component: UsersEditComponent},
      { path: ':id', component: UserDetailComponent},
      { path: ':id/edit', component: UsersEditComponent}
    ] },
  { path: 'currency', component: CurrencyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
