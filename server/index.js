const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/getTimeStories") {
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Access-Control-Allow-Origin", "*");

    fs.readFile("./data.json", (err, data) => {
      if (err) {
        response.write(err);
        response.end();
      } else {
        response.end(data);
      }
    });
  } else {
    response.end("invalid request");
  }
});

server.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});
