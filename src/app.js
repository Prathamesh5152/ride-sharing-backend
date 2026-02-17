const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/requests', require('./routes/requestRoutes'));
app.use('/api/rides', require('./routes/rideRoutes'));
app.use('/api/cabs', require('./routes/cabRoutes'));

require('./config/swagger')(app);   // ⭐ important

module.exports = app;
