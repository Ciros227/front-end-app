import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'child1',
  children: [{
    path: '**',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'child1' }
  }]
}, {
  path: 'child2',
  children: [{
    path: '**',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'child2' }
  }]
},{
  path: 'home',
  children: [{
    path: '**',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'home' }
  }]
},{
  path: 'profile',
  children: [{
    path: '**',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'profile' }
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
