import { Routes } from '@angular/router';
import {PageAccueilComponent} from "./component/page-accueil/page-accueil.component";
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  {path:'home', component:PageAccueilComponent},
  {path:'login', component:LoginComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'}

];