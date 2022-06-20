'use strict';
require('dotenv').config();

const { db } = require('./src/index.js');
const server = require('./src/server.js');

db.sync().then(() => {
    server.start(process.env.PORT);
}
).catch((e) => {
    throw new Error("error in app");
});

