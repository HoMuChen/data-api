const Router = require('express').Router;
const bodyParser = require('body-parser');

const getAll = require('./getAll');
const getNear = require('./getNear');

const toilet = new Router();

toilet.get('/',                    getAll);
toilet.get('/near',                getNear);

module.exports = toilet;
