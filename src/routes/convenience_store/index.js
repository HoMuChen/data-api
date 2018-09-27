const Router = require('express').Router;
const bodyParser = require('body-parser');

const getAll = require('./getAll');
const getNear = require('./getNear');

const convenience_store = new Router();

convenience_store.get('/',                    getAll);
convenience_store.get('/near',                getNear);

module.exports = convenience_store;
