import {Component, OnInit} from '@angular/core';
import {TrackedHttpService} from '../../services/tracked.http.service';
import {Trackable, Tracked} from '../../models/tracked.model';
import {MediaCardComponent} from '../../../shared/media-card/media-card.component';

@Component({
  selector: 'app-tracked',
  imports: [MediaCardComponent],
  templateUrl: './tracked.component.html',
  styleUrl: './tracked.component.scss',
})
export class TrackedComponent implements OnInit {
  private static TMDB_COVER_URL = 'https://image.tmdb.org/t/p/w500/';
  private static IGDB_COVER_THUMB = 't_thumb';
  private static IGDB_COVER_BIG = 't_cover_big';

  protected tracked?: Trackable[];

  constructor(private trackedService: TrackedHttpService) {
  }

  ngOnInit(): void {
    this.trackedService.getTracked().subscribe(tracked => (this.tracked = this.imgUpdate(tracked)));
  }

  private imgUpdate(tracked: Tracked) {
    tracked.movies.forEach(movie => (movie.coverUrl = TrackedComponent.TMDB_COVER_URL + movie.coverUrl));
    tracked.series.forEach(series => (series.coverUrl = TrackedComponent.TMDB_COVER_URL + series.coverUrl));
    tracked.games.forEach(
      games => (games.coverUrl = games.coverUrl.replace(TrackedComponent.IGDB_COVER_THUMB, TrackedComponent.IGDB_COVER_BIG))
    );

    return tracked.movies.concat(tracked.series)
      .concat(tracked.games)
      .concat(tracked.mangas)
      .sort((a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate));
  }
}
