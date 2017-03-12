import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from "./profile.component";
import { UserRoutes } from "./user.routes";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  providers: [
    
  ],
  bootstrap: [ProfileComponent]
})

export class UserModule { }
