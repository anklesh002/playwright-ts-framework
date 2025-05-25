import * as dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'qa'; // Default to development
dotenv.config({ path: `.env.${environment}` });
console.log(`Using environment configuration from .env.${environment}`);

export const config = {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    username: process.env.UI_USERNAME || 'defaultuser',
    password: process.env.UI_PASSWORD || 'defaultpassword',
};
console.log('Configuration loaded:', config);
console.log('Configuration process:', process.env);