const express = require('express');
const app = express();

const { configDotenv } = require('dotenv');
const dBConnect = require('./middlewares/dB');
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use(express.json());
configDotenv();
dBConnect();

app.use('/', feedbackRoutes);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});