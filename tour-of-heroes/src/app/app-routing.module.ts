import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
