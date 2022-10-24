import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsModule } from './materials/materials.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SitesComponent } from './components/sites/sites.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrainComponent } from './components/train/train.component';
import { SkilsComponent } from './components/skils/skils.component';




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    SitesComponent,
    ProjectsComponent,
    FooterComponent,
    NavComponent,
    ContactComponent,
    TrainComponent,
    SkilsComponent ,

  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,

     BrowserAnimationsModule,
     NgbModule,
     MaterialsModule,
     Ng2SearchPipeModule



  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
