import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import SpotifyProvider from 'next-auth/providers/spotify';
import {
  NODE_ENV,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} from '@/lib/env';

export const authOptions: NextAuthOptions = {
  secret: NEXTAUTH_SECRET,
  providers:
    NODE_ENV === 'test'
      ? [
          CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: {
                label: 'Username',
                type: 'text',
                placeholder: 'Username',
              },
              password: {
                label: 'Password',
                type: 'password',
                placeholder: 'Password',
              },
            },
            async authorize() {
              console.log('authorizing test user');
              return {
                id: 'abcd1234',
                name: 'John Doe',
                email: 'johndoe123@example.com',
                image: 'https://i.pravatar.cc/150?u=',
              };
            },
          }),
        ]
      : [
          FacebookProvider({
            clientId: FACEBOOK_CLIENT_ID,
            clientSecret: FACEBOOK_CLIENT_SECRET,
          }),
          GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
          }),
          SpotifyProvider({
            clientId: SPOTIFY_CLIENT_ID,
            clientSecret: SPOTIFY_CLIENT_SECRET,
          }),
        ],
  theme: {
    colorScheme: 'light',
  },
};
