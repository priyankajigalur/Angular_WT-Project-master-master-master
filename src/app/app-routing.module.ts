import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TermComponent } from './term/term.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactComponent } from './contact/contact.component';
import { LiveeventsComponent } from './liveevents/liveevents.component';

const routes: Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'home' , component:HomeComponent},
  {path : 'feed' , component:FeedbackComponent},
  {path : 'terms' , component:TermComponent},
  {path : '' , component:HomeComponent},
  {path : 'policy' ,component:PolicyComponent},
  {path : 'contact' , component:ContactComponent},
  {path : 'liveevents',component:LiveeventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
