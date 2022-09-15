module.exports = (app) => {
  // create a user
  app.post('/api/user', (request, reply) => {

  });
  
  // get the list of user
  app.get('/api/user', (request, reply) => {
	reply.code(200).send({data: "ok"})
  });
  
  // get a single user
  app.get('/api/user/:id', (request, reply) => {

  });
  
  // update a user
  app.put('/api/user/:id', (request, reply) => {

  });
  
  // delete a user
  app.delete('/api/user/:id', (request, reply) => {

  });
};
