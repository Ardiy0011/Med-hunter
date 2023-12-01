const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesurl = require('./routes/routes');
const cors = require('cors');

const app = express();

dotenv.config()
mongoose.connect(process.env.DB_ACCESS)
console.log('database conected')

// Configure bodyParser for handling JSON data
app.use(express.json());
app.use(cors());
app.use('/app', routesurl);

const port = process.env.PORT;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
