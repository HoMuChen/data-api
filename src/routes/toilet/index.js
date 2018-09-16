const Router = require('express').Router;
const bodyParser = require('body-parser');

const getAll = require('./getAll');

const toilet = new Router();

toilet.get('/',                    getAll);

module.exports = toilet;
