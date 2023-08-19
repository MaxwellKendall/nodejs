const http = require('http'); // native module

const PORT = 3000;

const handler = (req, res) => {
    console.log({ path: req.route, method: req.method })
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello Worldz!',
    }));

    switch(req.method) {
        case 'GET': {
            // handle all get requests
        }
        case 'POST': {
            // handle all POST request
        }
    }
}

// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer(handler);

server.listen(PORT, (err) => {
    if (err) {
        console.error('Oh no! There was an error!', err);
    } else {
        console.info(`Server is listening on port ${PORT}`);
    }
})