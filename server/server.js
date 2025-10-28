import config from '../portfolio/config/config.js'
import app from './express.js'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
  //useNewUrlParser: true,
  //useCreateIndex: true, 
  //useUnifiedTopology: true
})
  .then(() => {
    console.log("Database is connected for Assignment2!");
  })

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio Application." });
});
app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
