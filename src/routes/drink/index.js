const Router = require('express').Router;
const bodyParser = require('body-parser');

const getAll = require('./getAll');
const getNear = require('./getNear');

const drink = new Router();

drink.get('/',                    getAll);
drink.get('/near',                getNear);

module.exports = drink;
