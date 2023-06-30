const mongoose = require('mongoose');

// Connection string to your MongoDB database
const dbURI = 'mongodb://localhost:27017/mydatabase';

// Connect to the MongoDB database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Event handlers for successful connection and connection error
mongoose.connection.on('connected', () => {
  console.log('Connected to the database.');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to the database:', err);
});
