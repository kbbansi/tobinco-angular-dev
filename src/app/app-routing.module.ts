import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./tobinco-app/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'products', loadChildren: () => import('./tobinco-app/products/products.module').then(m => m.ProductsModule) },
      { path: 'transactions', loadChildren: () => import('./tobinco-app/transactions/transactions.module').then(m => m.TransactionsModule) },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
