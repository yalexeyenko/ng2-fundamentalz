import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from "./profile.component";
import { UserRoutes } from "./user.routes";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  providers: [
    
  ],
  bootstrap: [ProfileComponent]
})

export class UserModule { }
