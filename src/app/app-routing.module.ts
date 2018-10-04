import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { McDonaldsComponent }   from './mc-donalds/mc-donalds.component';
import { BobsComponent }      from './Bobs/Bobs.component';
import { BkComponent }  from './bk/bk.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'mc-donalds', component: McDonaldsComponent },
  { path: 'bk', component: BkComponent },
  { path: 'Bobs', component: BobsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
