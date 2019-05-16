const express = require('express');
const keysRouter = express.Router();

const judgeApi = 'https://f44e15bb.ngrok.io';


keysRouter.route('/secret')
  .get((request, response) => {
    response.send('803a1cfba8c29bdc45a5b1d63b0ae1b5b045281d04f601fd65c35e4e09e67540363');
  })

keysRouter.route(`/success`)
  .post((request, response) => {
    console.log(request.body);
  })

module.exports = keysRouter;