import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEvent: Event = {
    title: '',
    description: '',
    date: '',
    published: false
  };

  message = '';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEvent(this.route.snapshot.params["id"]);
    }
  }

  getEvent(id: string): void {
    this.eventService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEvent = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentEvent.title,
      description: this.currentEvent.description,
      published: status
    };

    this.message = '';

    this.eventService.update(this.currentEvent.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentEvent.published = status;
          this.message = res.message ? res.message : 'Le statut a été mis à jour avec succès !';
        },
        error: (e) => console.error(e)
      });
  }

  updateEvent(): void {
    this.message = '';

    this.eventService.update(this.currentEvent.id, this.currentEvent)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'L\'évènement a été mis à jour avec succès !';
        },
        error: (e) => console.error(e)
      });
  }

  deleteEvent(): void {
    this.eventService.delete(this.currentEvent.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/events']);
        },
        error: (e) => console.error(e)
      });
  }

}
