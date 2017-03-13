import { Component } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html',
    styles: [`
        
    `]
})

export class LoginComponent {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
    
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cancel(): void {
        this.router.navigate(['events'])
    }

}