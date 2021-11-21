import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = {
    title: '',
    description: '',
    date: '',
    published: false
  };
  submitted = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent(): void {
    const data = {
      title: this.event.title,
      description: this.event.description,
      date: this.event.date
    };

    this.eventService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newEvent(): void {
    this.submitted = false;
    this.event = {
      title: '',
      description: '',
      date: '',
      published: false
    };
  }

}
