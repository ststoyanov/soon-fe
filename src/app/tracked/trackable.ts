export interface Trackable {
  id: string;
  externalId: string;
  title: string;
  releaseDate?: Date;
  lastReleased?: Date;
  coverUrl: string;
  description: string;
  mediaType: MediaType;
  lastWatchedAt?: Date;
}

export type MediaType = 'MOVIE' | 'MANGA' | 'TV_SERIES' | 'GAME';
