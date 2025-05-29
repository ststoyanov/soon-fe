import { Component, input, output, signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MediaCardComponent } from '../../media-card/media-card.component';
import { Trackable } from '../trackable';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-collection',
  imports: [MatIconButton, MediaCardComponent, MatIcon],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {
  name = input.required<string>();
  media = input.required<Trackable[]>();

  show = signal<boolean>(true);
  untrack = output<Trackable>();
  markWatched = output<Trackable>();

  toggleShow() {
    this.show.update(value => !value);
  }
}
