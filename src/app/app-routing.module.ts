import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './cv/experiences/experiences.component';
import { SkillsComponent } from './cv/skills/skills.component';
import { MeComponent } from './me/me.component';
import { CvComponent } from './cv/cv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: 'me',
      component: MeComponent
  },
  {
      path: 'cv',
      component: CvComponent,
      children:[
          {
              path: 'skills',
              component: SkillsComponent
          },
          {
            path: 'experiences',
            component: ExperiencesComponent
          }
      ]
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
    path: 'not-found',
    component: MeComponent,
    data: {message: 'Page not found'}
  },
  {
    path: '**', redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
