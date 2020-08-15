import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login-view/login.component';
import { MainViewComponent } from './components/main-view/main-view.component'
import { UsersCrudViewComponent } from './components/users-crud-view/users-crud-view.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'adminPanel', component: MainViewComponent },
  { path: 'usersCrud', component: UsersCrudViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
