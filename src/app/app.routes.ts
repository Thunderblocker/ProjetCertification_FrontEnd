import { Routes } from '@angular/router';
import {PageAccueilComponent} from "./component/page-accueil/page-accueil.component";
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';

export const routes: Routes = [
  {path:'home', component:PageAccueilComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'}

];