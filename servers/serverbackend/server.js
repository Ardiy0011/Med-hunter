const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesurl = require('./routes/routes');
const cors = require('cors');

const app = express();

dotenv.config()
//connect to mongodb database
mongoose.connect(process.env.DB_ACCESS)
console.log('database conected')

// Configure bodyParser for handling JSON data
app.use(express.json());
// handle cors errors
app.use(cors());
// use the routes in the routes folder
app.use('/app', routesurl);

const port = process.env.PORT;


app.listen(process.env.PORT || port, () => {
  console.log(`authentication server is running on port ${port}`);
});
