const read = require('fs').readFile;
const path = require('path');

const main = () => {
    const file = path.resolve('.', './sample.txt');
    read(file, 'utf-8', (e, d) => {
        if (e) {
            console.error('Error reading file', e);
        } else {
            console.log('data', d)
        }
    })
}

main();