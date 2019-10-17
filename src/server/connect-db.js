import { MongoClient } from 'mongodb';
const url = process.env.MONGODB_URI || `mongodb://localhost:27017/msdTechData`;
let db = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db();
  return db;
}
connectDB();
