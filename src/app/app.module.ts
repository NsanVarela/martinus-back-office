import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { EventDetailsComponent } from './components/event/event-details/event-details.component';
import { EventsListComponent } from './components/event/events-list/events-list.component';
import { AddItemComponent } from './components/item/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import { ItemsListComponent } from './components/item/items-list/items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    EventDetailsComponent,
    EventsListComponent,
    AddItemComponent,
    ItemDetailsComponent,
    ItemsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
