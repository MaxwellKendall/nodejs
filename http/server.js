const http = require('http');

const PORT = 3000;

const handler = (req, res) => {
    console.log({ path: req.path, method: req.method })
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));  
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