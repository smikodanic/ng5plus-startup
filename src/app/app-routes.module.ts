// modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

// services
import { IsLoggedService } from './ng/services/routeGuards/isLogged.service';
import { HasRoleService } from './ng/services/routeGuards/hasRole.service';

// routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [IsLoggedService, HasRoleService] },
  { path: 'customer', component: CustomerComponent, canActivate: [IsLoggedService, HasRoleService] },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [IsLoggedService, HasRoleService],
  exports: [ RouterModule ],
  declarations: [
    HomeComponent,
    AdminComponent,
    CustomerComponent,
    NotfoundComponent
  ]
})

export class AppRoutesModule {}
