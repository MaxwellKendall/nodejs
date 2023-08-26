const path = require('path');

const parentDir = '/home/user';
const childDir = 'projects';
const fileName = 'app.js';

const fullPath = path.join(parentDir, childDir, fileName);

console.log({ fullPath });