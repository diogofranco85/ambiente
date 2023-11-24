const http = require('http');

const server = http.createServer()

server.on("request", (request, response) => {
    console.log("API2 :: Request");
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const responseBody = {
        success: true,
        dateTime: (new Date()).toISOString(),
        env: "app2"
    }

    response.write(JSON.stringify(responseBody));
    response.end();
})

const port = 3002
server.listen(port, error => {
    if (error) {
        return console.log(error);
    }

    console.log("server running", port);
});