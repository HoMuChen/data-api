const Router = require('express').Router;
const bodyParser = require('body-parser');

const getAll = require('./getAll');
const getNear = require('./getNear');

const ubike = new Router();

ubike.get('/',                    getAll);
ubike.get('/near',                getNear);

module.exports = ubike;
