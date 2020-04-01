#!/usr/bin/env node

const argv = require('./argv');
const Express = require('express');
const proxy = require('express-http-proxy');

const { log } = require('./middleware');
const PORT = argv.port;
const TO = argv.to;

// // TODO control that it does not redirect to the same port

const app = Express();

app.use('/', log({ silent: argv.silent }), proxy(TO));

app.listen(PORT);
