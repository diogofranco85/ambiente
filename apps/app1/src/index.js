const http = require('http');

const server = http.createServer()

server.on("request", (request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const responseBody = {
        success: true,
        dateTime: (new Date()).toISOString(),
        env: "app1"
    }

    response.write(JSON.stringify(responseBody));
    response.end();
})

server.listen(3001, error => {
    if (error) {
        return console.log(error);
    }

    console.log("server running");
});