import { Injectable } from '@angular/core'
import { IUser } from "./user.model";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor(private http: Http) { }

    loginUser(userName: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let loginInfo = { username: userName, password: password };

        return this.http.post(`http://localhost:8808/api/login`, JSON.stringify(loginInfo), options).do(resp => {
            if (resp) {
                this.currentUser = <IUser>resp.json().user;
            }
        }).catch(error => {
            return Observable.of(false);
        })
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log('updateCurrentUser()...');
        return this.http.put(`http://localhost:8808/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    checkAuthenticationStatus() {
        return this.http.get(`http://localhost:8808/api/currentIdentity`).map((response: any) => {
            console.log('response:', response)
            console.log('response._body:', response._body)
            if (response._body) {
                console.log('response:', response)
                return response.json();
            } else {
                console.log('response:', response)
                return {}
            }
        }).do(currentUser => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        }).subscribe();
    }
}
