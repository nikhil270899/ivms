import dotenv from 'dotenv';

dotenv.config();

export default {
  database_url: process.env.DATABASE_URL,  
  secret: process.env.SECRET,
  port: process.env.PORT || 5001,
  environment: process.env.NODE_ENV
}
