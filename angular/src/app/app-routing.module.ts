import { LoginComponent } from './componets/auth/login/login.component';
import { UesrProfileComponent } from './componets/user/uesr-profile/uesr-profile.component';
import { DashbordComponent } from './componets/admin/dashbord/dashbord.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import  { UserGuard }  from './auth/user.guard'
import { AdminGuard } from './auth/admin.guard';
const routes: Routes = [
  { path: '',component:LoginComponent },
  { path: 'admin',canActivate:[AdminGuard], component: DashbordComponent },
  { path: 'userProfile',canActivate:[UserGuard] ,component: UesrProfileComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', component:  },

];

@NgModule({

  imports: [ HttpClientModule ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
