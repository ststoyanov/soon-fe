import { Pipe, PipeTransform } from '@angular/core';
import { MediaType } from '../../tracked/trackable';

const TMDB_COVER_URL = 'https://image.tmdb.org/t/p/w500/';
const IGDB_COVER_THUMB = 't_thumb';
const IGDB_COVER_BIG = 't_cover_big';

@Pipe({ name: 'mediaImage' })
export class MediaImagePipe implements PipeTransform {
  transform(url: string, type: MediaType): string {
    if (!url) {
      return '/img/Image-not-found.png';
    }

    switch (type) {
      case 'MOVIE':
        return TMDB_COVER_URL + url;
      case 'TV_SERIES':
        return url;
      case 'GAME':
        return url.replace(IGDB_COVER_THUMB, IGDB_COVER_BIG);
      case 'MANGA':
        return url;
    }
  }
}
