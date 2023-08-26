const url = require('url');

const URL_STRING=`http://example.com/path/?param1=value1&param2=value2`

const parsedUrl = url.parse(URL_STRING);

console.log({ parsedUrl })