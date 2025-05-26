import * as dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'qa'; // Default to development
dotenv.config({ path: `.env.${environment}` });
console.log(`Using environment configuration from .env.${environment}`);

// Spread all loaded environment variables into config object.
export const config = { ...process.env };

console.log('Configuration loaded:', config);
console.log('Configuration process:', process.env);