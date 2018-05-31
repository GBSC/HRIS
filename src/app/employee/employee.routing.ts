import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { RootComponent }    from './root/root.component';
import { HomeComponent }    from './home/home.component'; 

import { AuthGuard } from '../auth.guard';
import { BasicinformationComponent } from './basicinformation/basicinformation.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'employee',
      component: RootComponent, canActivate: [AuthGuard],

      children: [      
       { path: '', component: HomeComponent },
       { path: 'home',  component: HomeComponent },
       { path: 'basicinformation',  component: BasicinformationComponent }
      ]       
    }  
]);

