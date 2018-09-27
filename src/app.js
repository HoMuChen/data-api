const express = require('express');
const morgan = require('morgan');

const config = require('../configs/server');
const {
  ubike,
  toilet,
  convenience_store,
  drink,
} = require('./routes');

const app = new express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api/ubike',                ubike);
app.use('/api/toilet',               toilet);
app.use('/api/convenience_store',    convenience_store);
app.use('/api/drink',                drink);

app.listen(config.port, config.host, () => {
  console.log(`API server is running on http:\/\/${config.host}:${config.port}`)
})
