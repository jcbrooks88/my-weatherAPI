// Import the dotenv package
import dotenv from 'dotenv';

// Automatically load environment variables from the .env file
dotenv.config();

// Access the environment variable
const apiKey = process.env.API_KEY;


console.log('Nice! Your API Key is:', apiKey); // Verifies it works
