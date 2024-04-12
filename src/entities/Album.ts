import { Artist } from './Artist';
import { Track } from './Track';

export type Album = {
  artist: Artist;
  name: string;
  tracks: Track[];
}