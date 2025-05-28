export interface Tracked {
  movies: Trackable[];
  series: Trackable[];
  games: Trackable[];
  mangas: Trackable[];
}

interface Trackable {
  id: string; // UUID in TypeScript is typically represented as a string
  externalId: string;
  title: string;
  releaseDate: string; // or Date if you prefer to work with Date objects
  lastReleased: string; // or Date
  coverUrl: string;
  description: string;
}
