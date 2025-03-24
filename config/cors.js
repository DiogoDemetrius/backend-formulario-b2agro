const cors = require('cors');

const corsOptions = {
  origin: 'https://b2agroforms.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

module.exports = cors(corsOptions);