const express = require('express');
const cors = require('cors');
const { ObjectId } = require('mongodb');
const { connect, getDB } = require('./db');

const app = express();
const port = 3000; // Replace with your desired port number

app.use(express.json());

app.use(cors());

app.get('/api/v3/app/events', async (req, res) => {
  const { id, type, limit, page } = req.query;

  try {
    const db = getDB();
    let query = {};

    if (id) {
      query = { _id: new ObjectId(id) };
    } else if (type === 'latest') {
      const skip = (page - 1) * limit;
      query = { type: 'event' };
      const events = await db.collection('events')
        .find(query)
        .sort({ schedule: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .toArray();

      return res.json(events);
    }

    const event = await db.collection('events').findOne(query);
    res.setHeader('Content-Type', 'application/json'); 
    res.json(event);
  } catch (error) {
    console.error('Error retrieving event:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/v3/app/events', async (req, res) => {
  const event = req.body;

  try {
    const db = getDB();
    const result = await db.collection('events').insertOne(event);
    res.json({ id: result.insertedId });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.put('/api/v3/app/events/:id', async (req, res) => {
  const { id } = req.params;
  const event = req.body;

  try {
    const db = getDB();
    const result = await db.collection('events').updateOne({ _id: new ObjectId(id) }, { $set: event });
    res.json({ modifiedCount: result.modifiedCount });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.delete('/api/v3/app/events/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDB();
    const result = await db.collection('events').deleteOne({ _id: new ObjectId(id) });
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running'); 
});


// Start the server
connect().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
