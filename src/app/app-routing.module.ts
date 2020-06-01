import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from'../app/home/home.component'
import{AboutComponent} from'../app/about/about.component'
import{ServiceComponent} from'../app/service/service.component'
import{EventComponent} from'../app/event/event.component'
import{ContactComponent} from'../app/contact/contact.component'




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServiceComponent},
  {path:'activities',component:EventComponent},
  {path:'donate',component:AboutComponent},
  {path:'contact',component:ContactComponent},
 { path: '**',   redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,AboutComponent];
