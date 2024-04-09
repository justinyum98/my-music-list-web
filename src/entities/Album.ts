import { Artist } from './Artist';
import { Track } from './Track';

export type Album = {
  artist: Artist;
  tracks: Track[];
}