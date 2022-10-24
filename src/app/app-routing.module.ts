import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SitesComponent } from './components/sites/sites.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkilsComponent } from './components/skils/skils.component';


const routes: Routes = [
  {path: '', component:ProjectsComponent},
  // {path: 'HomeComponent', component:HomeComponent},
  {path: 'SitesComponent', component:SitesComponent},
  {path: 'ProjectsComponent', component:ProjectsComponent},
  {path: 'FooterComponent', component:FooterComponent},
  {path: 'SkilsComponent', component:SkilsComponent},

  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
