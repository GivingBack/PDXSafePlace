import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SafeplaceComponent } from './safeplace/safeplace.component';
import { AboutComponent } from './about/about.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'safeplace',
    component: SafeplaceComponent
  },
  {
  path: 'resources/:id',
  component: ResourceDetailComponent
}
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
