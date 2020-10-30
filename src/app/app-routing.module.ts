import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChucvusComponent } from './chucvus/chucvus.component';
import { GiangviensComponent } from './giangviens/giangviens.component';




const routes: Routes = [ //goc re
  {path:'giangviens',component:GiangviensComponent},
  {path:'chucvus',component:ChucvusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
