const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const categoryRoutes = require('./routes/categoryRoutes');
const petsRoute = require('./routes/petsroute');
const adoptionRoutes = require('./routes/adoptionRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/public', express.static(path.join(__dirname, 'public')));


app.use('/api/category/', categoryRoutes);
app.use('/api/pets/', petsRoute);
app.use('/api/adoption', adoptionRoutes)

const mongoUri = 'mongodb+srv://anjalichandwani04:chandwani12@cluster0.y8islsn.mongodb.net/'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo');
})

mongoose.connection.on('error', (err) => {
    console.log("error connecting to mongo",err );
})

app.listen(4000, () => {
    console.log("App is running on PORT 4000")
})