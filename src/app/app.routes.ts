import { Routes } from '@angular/router';
import {PageAccueilComponent} from "./component/page-accueil/page-accueil.component";

export const routes: Routes = [
  {path:'home', component:PageAccueilComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'}

];
