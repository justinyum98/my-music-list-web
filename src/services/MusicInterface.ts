import { Artist, Album, Track, Review } from '@/entities';

export interface MusicInterface {
  search: (query: string) => Artist | Album | Track

  addToList: (item: Artist | Album | Track, rating: number, content: string) => Review;
  removeFromList: (review: Review) => void;

  editReview: (reviewId: string, review: Review) => void;
}
