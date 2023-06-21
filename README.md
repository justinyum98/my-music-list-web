# My Music List

A website for creating and sharing your personalized list of favorite songs, albums, and artists.

[Website link](https://my-music-list-web.vercel.app/)

_(TODO: Insert screenshots, GIFs, and videos here)_

## Tech Stack

- Language: [TypeScript](https://www.typescriptlang.org/)
  - Why:
    - JavaScript but strongly typed and safer
    - Most suitable for web development
- Framework: [Next.js](https://nextjs.org/), a React framework
  - Why:
    - Good site performance with server-side rendering (SSR)
    - Full-stack framework (easier to manage one codebase than two)
  - Alternatives considered:
    - [Django](https://www.djangoproject.com/)
- Styling: [TailwindCSS](https://tailwindcss.com/)
  - Alternatives considered:
    - [Material-UI (MUI)](https://mui.com/)
- Database: [MongoDB Atlas](https://www.mongodb.com/atlas/database)
  - Why:
    - Suitable for small-scale projects, where demands/features may change frequently during development
    - Good developer experience
  - Alternatives considered:
    - [PostgreSQL](https://www.postgresql.org/)
- ORM: [Prisma](https://www.prisma.io/)
  - Why:
    - Good developer experience
    - Integrates well with TypeScript
  - Alternatives considered:
    - (Not an ORM, but) [mongoose](https://mongoosejs.com/)
- Testing: [Cypress.io](https://www.cypress.io/)
- CI/CD: [GitHub Actions](https://github.com/features/actions)
- Hosting: [Vercel](https://vercel.com/)
- Linting:
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- Extra Tools:
  - [Storybook](https://storybook.js.org/) (for testing UI components in isolation)
  - [Docker](https://www.docker.com/) (for provisioning local database server instances for local development and testing)

![High-Level System Diagram](https://www.dropbox.com/s/st92swdxlgoiypo/MML%20System%20Diagram.drawio.png?raw=1)

## Project Purpose

Simply put, I love music: listening to it, making it, and playing it. Through music, I've made countless invaluable connections with other music enjoyers.

However, over the years as my Spotify playlists have grown in number and size, it's been incredibly difficult to keep track of:

- **What** I listened to, whether it be a specific artist, album, or track.
- **When** I listened to an artist, album, or track.
- **Why** I enjoy/dislike that artist, album, or track.
- **How** I discovered that artist, album, or track.

So, I decided to build a website from scratch that does all that! My Music List will allow one to:

- **Add / Edit / Delete** an artist, album, or track to their _list_.
- **Include details**, like _rating_, _date discovered_, _memory/story_, etc.
- **Easily share** their _list_ with others for an interesting conversation topic and/or to recommend their favorite music.

## Features

See my Trello [project board](https://trello.com/b/xYf4h4Yz).

### For MVP

- [ ] Authentication
  - Sign in (Username/password, Social sign-in)
  - Sign up (Username, email, password)
  - Sign out
  - Delete account
- [ ] Search for item (artist, album, track)
  - Spotify Web API
- [ ] Add / read / edit / delete item to list
- [ ] Public / private list (user should be able to decide)

### Planned for future

- [ ] Write reviews on items in their list
- [ ] Social interaction, users can
  - [ ] Follow each other
  - [ ] Comment on reviews
  - [ ] Upvote reviews/comments
