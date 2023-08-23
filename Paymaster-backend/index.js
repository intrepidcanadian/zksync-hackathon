// DEPENDANCIES
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const knex = require('knex')


const PORT = process.env.PORT
const CORS_ORIGIN = process.env.CORS_ORIGIN

// PARSE JSON DATA
app.use(express.json())

app.use(cors({ origin: CORS_ORIGIN }));

// ROUTES
const gameRoutes = require("./routes/tickets");
const merchRoutes = require("./routes/merch");
const emails = require("./routes/emails");
const signemails = require("./routes/sign-email");

// DEFINE ROUTES
app.use('/api/games/', gameRoutes)
app.use('/api/merch/', merchRoutes)
app.use('/api/emails/', emails)
app.use('/api/sign-email/', signemails)


app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
