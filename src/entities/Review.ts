import { Album } from "./Album"
import { Artist } from "./Artist"
import { Track } from "./Track";

export type Review = {
    id: string;
    item: Album | Artist | Track;
    rating: number;
    content: string;
}