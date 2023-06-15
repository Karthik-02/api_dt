const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://2031020mss:deepthought@goodman.xsefkq4.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    await client.connect();
    db = client.db('mydb'); // Replace with your database name
    console.log('Connected to MongoDB');
    db.collection('events').createIndex({ type: 1 });
db.collection('events').createIndex({ uid: 1 });
db.collection('events').createIndex({ name: 1 });
db.collection('events').createIndex({ tagline: 1 });
db.collection('events').createIndex({ schedule: 1 });
db.collection('events').createIndex({ description: 1 });
db.collection('events').createIndex({ 'files.image': 1 });
db.collection('events').createIndex({ moderator: 1 });
db.collection('events').createIndex({ category: 1 });
db.collection('events').createIndex({ sub_category: 1 });
db.collection('events').createIndex({ rigor_rank: 1 });
db.collection('events').createIndex({ attendees: 1 });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

function getDB() {
  return db;
}

module.exports = { connect, getDB };
