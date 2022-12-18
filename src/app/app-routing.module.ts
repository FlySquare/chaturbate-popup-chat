import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ChatComponent} from "./pages/chat/chat.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'user/:userId', component: ChatComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
