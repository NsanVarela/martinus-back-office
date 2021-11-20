import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { EventDetailsComponent } from './components/event/event-details/event-details.component';
import { EventsListComponent } from './components/event/events-list/events-list.component';
import { AddItemComponent } from './components/item/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import { ItemsListComponent } from './components/item/items-list/items-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'items', component: ItemsListComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'add-item', component: AddItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
