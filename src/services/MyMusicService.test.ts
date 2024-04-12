import { SearchResult } from "@/entities/SearchResult";

describe('MyMusicService', () => {
    it('should search for an album', () => {
        // Arrange
        // This is a response from Spotify API
        // https://developer.spotify.com/documentation/web-api/reference/search
        const albumFromSource = {
              "album_type": "compilation",
              "total_tracks": 9,
              "available_markets": ["CA", "BR", "IT"],
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "2up3OPMp9Tb4dAKM2erWXQ",
              "images": [
                {
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                  "height": 300,
                  "width": 300
                }
              ],
              "name": "string",
              "release_date": "1981-12",
              "release_date_precision": "year",
              "restrictions": {
                "reason": "market"
              },
              "type": "album",
              "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "string"
                  },
                  "href": "string",
                  "id": "string",
                  "name": "string",
                  "type": "artist",
                  "uri": "string"
                }
              ]
            };

        const mockClient = {
            search: jest.fn(() => [album])
        };

        // Act
        const result: SearchResult[] = search('DAMN');

        // Assert
        const album = {
            artist: albumFromSource.artists[0],
            name: albumFromSource.name,
            tracks: []
        }
        expect(result).toBe([album]);
    });
})
