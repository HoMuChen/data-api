const express = require('express');
const morgan = require('morgan');

const config = require('../configs/server');
const {
  ubike,
  toilet,
} = require('./routes');

const app = new express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api/ubike',     ubike);
app.use('/api/toilet',    toilet);

app.listen(config.port, config.host, () => {
  console.log(`API server is running on http:\/\/${config.host}:${config.port}`)
})
