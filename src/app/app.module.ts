import { AppRoutingModule } from './app-routing.module';
import { SkillsService } from './cv/skills/skills.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './cv/skills/skills.component';
import { NotationFontDirective } from './cv/skills/skills.directive';
import { ExperiencesComponent } from './cv/experiences/experiences.component';
import { CvComponent } from './cv/cv.component';
import { MeComponent } from './me/me.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    NotationFontDirective,
    ExperiencesComponent,
    CvComponent,
    MeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
