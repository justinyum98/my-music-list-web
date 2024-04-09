import { Artist, Album, Track, Review } from "@/entities";
import { MusicInterface } from "./MusicInterface";

class MyMusicService implements MusicInterface {
    search(query: string): Artist | Album | Track {
        return {
            name: 'hello'
        }
    }

    addToList(item: Artist | Album | Track, rating: number, content: string): Review {
        return {
            id: 'sdfdsf',
            item: {
                name: 'dsjfldsjf'
            },
            rating: 10,
            content: 'blah blah'
        }
    };

    removeFromList(review: Review): void {
        return;
    }

    editReview(reviewId: string, review: Review): void {
        return;
    }
}