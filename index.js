const fastify = require('fastify');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes.js');
require("dotenv").config();


const app = fastify({
  logger: {
    level: 'debug',
    transport: {
      target: 'pino-pretty'
    }
  }
})


mongoose.connect(process.env.DB_URI).then(res => {
  app.log.info("Database Connected")
}).catch(e => {
  app.log.fatal("Database connection failed");
  app.log.fatal(e);
  process.exit(0);
})


userRoutes(app);

app.get('/', (request, reply) => {
  try{
    reply.send("Hello world!");
  } catch(e) {
    console.error(e);
  }
})


function start(){
  app.log.info("Starting server");

  app.listen({port: process.env.PORT || 3000}, (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    app.log.info("Connecting to Database");
  });
}

start();
