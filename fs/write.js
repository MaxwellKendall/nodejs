const fs = require('fs');
const path = require('path');

const write = fs.writeFile;
const append =fs.appendFile;

const main = (shouldAppend = false) => {
    const file = path.resolve('.', './sample.txt');
    const fn = shouldAppend ? append : write;
    fn(file, '\nhi guys', (e, d) => {
        if (e) {
            console.error('Error reading file', e);
        } else {
            console.log('data', d)
        }
    })
}

main(true);