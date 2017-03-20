import { Injectable } from '@angular/core'
import { ISession } from "../shared/event.model";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class VoterService {

    constructor(private http: Http) { }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);

        this.http.delete(`http://localhost:8808/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`).catch(this.handleError).subscribe();
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `http://localhost:8808/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }
}
