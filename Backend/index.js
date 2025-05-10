require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoString = process.env.CONN_STRING;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
const accountRoutes = require('./Routes/AccountRoutes');

app.use(express.json());
app.use('/api', accountRoutes);

app.listen(3000, () => {
    console.log('Server Started at 3000');
})