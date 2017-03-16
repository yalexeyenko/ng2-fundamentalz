import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './routes';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from "./events/events-list.component";
import { EventsThumbnailComponent } from "./events/event-thumbnail.component";
import { EventListResolver } from "./events/events-list-resolver.service";
import { EventService } from "./events/shared/event.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.component";
import { NavBarComponent } from "./nav/navbar.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./error/404.component";
import { AuthService } from "./events/user/auth.service";
import { CreateSessionComponent } from "./events/event-details/create-session.component";
import { SessionListComponent } from "./events/event-details/session-list.component";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { DurationPipe } from "./events/shared/duration.pipe";
import { TOASTR_TOKEN, Toastr } from "./common/toastr.service";
import { JQ_TOKEN } from "./common/jQuery.service";
import { SimpleModalComponent } from "./common/simpleModal.component";
import { ModalTriggerDirective } from "./common/modalTrigger.directive";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    EventService,
    {
     provide: TOASTR_TOKEN,
     useValue: toastr 
    },
    {
     provide: JQ_TOKEN,
     useValue: jQuery 
    },
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want ot cancel?')
  } else {
    return true;
  }
}