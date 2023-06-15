const express = require('express');
const { ObjectId } = require('mongodb');
const { connect, getDB } = require('./db');

const app = express();
const port = 3000; // Replace with your desired port number

app.use(express.json());

app.get('/api/v3/app/events', async (req, res) => {
  const { id, type, limit, page } = req.query;

  try {
    const db = getDB();
    let query = {};

    if (id) {
      query = { _id: ObjectId(id) };
    } else if (type === 'latest') {
      const skip = (page - 1) * limit;
      query = { type: 'event' };
      const events = await db.collection('events')
        .find(query)
        .sort({ schedule: -1 })
        .skip(skip)
        .limit(limit)
        .toArray();

      return res.json(events);
    }

    const event = await db.collection('events').findOne(query);
    res.json(event);
  } catch (error) {
    console.error('Error retrieving event:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const sampleData = [
  {
    type: 'event',
    uid: 18,
    name: 'Sample Event 1',
    tagline: 'A proper tagline for Sample Event 1',
    schedule: new Date('2023-06-16T09:00:00Z'),
    description: 'Sample description for Sample Event 1',
    files: {
      image: 'sample_image1.jpg',
    },
    moderator: 'John Doe',
    category: 'Category 1',
    sub_category: 'Subcategory 1',
    rigor_rank: 3,
    attendees: [1, 2, 3],
  },
  {
    type: 'event',
    uid: 18,
    name: 'Sample Event 2',
    tagline: 'A proper tagline for Sample Event 2',
    schedule: new Date('2023-06-17T14:30:00Z'),
    description: 'Sample description for Sample Event 2',
    files: {
      image: 'sample_image2.jpg',
    },
    moderator: 'Jane Smith',
    category: 'Category 2',
    sub_category: 'Subcategory 2',
    rigor_rank: 4,
    attendees: [4, 5, 6],
  },
];


app.post('/api/v3/app/events', async (req, res) => {
  const event = req.body;

  try {
    const db = getDB();
    const result = await db.collection('events').insertMany(sampleData);
    res.json({ ids: result.insertedIds });
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
    const result = await db.collection('events').updateOne({ _id: ObjectId(id) }, { $set: event });
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
    const result = await db.collection('events').deleteOne({ _id: ObjectId(id) });
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running'); // Change the response message as needed
});

// Start the server
connect().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
