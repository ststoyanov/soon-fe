import {Component, OnInit} from '@angular/core';
import {TrackedHttpService} from '../../services/tracked.http.service';
import {Tracked} from '../../models/tracked.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-tracked',
  imports: [
    DatePipe
  ],
  templateUrl: './tracked.component.html',
  styleUrl: './tracked.component.scss'
})
export class TrackedComponent implements OnInit {
  protected tracked?: Tracked;

  constructor(
    private trackedService: TrackedHttpService) {
  }

  ngOnInit(): void {
    this.trackedService.getTracked().subscribe(tracked => this.tracked = tracked);
  }

}
