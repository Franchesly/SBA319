const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const Activity = require('./models/activity.js');
const Destination = require('./models/destination.js');
const User = require('./models/user.js');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

// Route Definitions
app.use('/api/', require('./routes/userRoutes.js'));
app.use('/api/', require('./routes/destinationRoutes.js'));
app.use('/api/', require('./routes/activityRoutes.js'));

//Seeding
app.use('/api/', require('./routes/seedDataRoute.js'));

//Home Route
app.get('/api/', (req, res)=>{
    res.send('Home Page!')
})
//Drop all existing data, then seed
app.get("/api/seed/all", async (req, res) => {
    try {
        await Promise.all([
            Activity.deleteMany({}),
            Destination.deleteMany({}),
            User.deleteMany({}),
        ]);
    } catch (e) {
        console.log(`Something went wrong loading seed data: ${e.message}`);
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));