function getRequiredEnvVar(name: string): string {
    const value = process.env[name];
    if (value === undefined || value === '') {
        throw new Error(`Missing required environment variable ${name}`);
    }
    return value;
}

export const NODE_ENV = getRequiredEnvVar('NODE_ENV');
export const DATABASE_URL = getRequiredEnvVar('DATABASE_URL');
export const BASE_URL = getRequiredEnvVar('BASE_URL');
export const NEXTAUTH_URL = getRequiredEnvVar('NEXTAUTH_URL');
export const NEXTAUTH_SECRET = getRequiredEnvVar('NEXTAUTH_SECRET');
export const FACEBOOK_CLIENT_ID = getRequiredEnvVar('FACEBOOK_CLIENT_ID');
export const FACEBOOK_CLIENT_SECRET = getRequiredEnvVar(
    'FACEBOOK_CLIENT_SECRET'
);
export const GOOGLE_CLIENT_ID = getRequiredEnvVar('GOOGLE_CLIENT_ID');
export const GOOGLE_CLIENT_SECRET = getRequiredEnvVar('GOOGLE_CLIENT_SECRET');
export const SPOTIFY_CLIENT_ID = getRequiredEnvVar('SPOTIFY_CLIENT_ID');
export const SPOTIFY_CLIENT_SECRET = getRequiredEnvVar('SPOTIFY_CLIENT_SECRET');
