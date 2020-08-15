import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login-view/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import { UsersCrudViewComponent } from './components/users-crud-view/users-crud-view.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'root', component: MainViewComponent, canActivate: [AngularFireAuthGuard],
    children: [
      { path: '', redirectTo: 'adminPanel', pathMatch: 'full' },
      { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AngularFireAuthGuard] },
      { path: 'usersCrud', component: UsersCrudViewComponent, canActivate: [AngularFireAuthGuard] }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
