require('dotenv').config();

export const getMongoURI = (): string =>
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.LOCAL_IP}:27017/${process.env.MONGODB_DB}?authSource=admin`;
