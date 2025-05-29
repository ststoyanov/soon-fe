export interface Tracked {
  movies: Trackable[];
  series: Trackable[];
  games: Trackable[];
  mangas: Trackable[];
}

export interface Trackable {
  id: string;
  externalId: string;
  title: string;
  releaseDate: string;
  lastReleased: string;
  coverUrl: string;
  description: string;
  type: 'MOVIE' | 'MANGA' | 'SERIES' | 'GAME';
}
