const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route Definitions
app.use('/api/', require('./routes/userRoutes'));
app.use('/api/', require('./routes/destinationRoutes'));
app.use('/api/', require('./routes/activityRoutes'));

//homeroute
app.get('/api/', (req, res)=>{
    res.send('Home Page!')
})

//Seeding
app.use('/api/', require('./routes/seedDataRoute'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
