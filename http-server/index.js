/* eslint-disable no-unused-vars */
/* eslint-disable n/no-deprecated-api */
/* eslint-disable quotes */
/* eslint-disable semi */
const http = require("http");
const fs = require("fs");

const args = require("minimist")(process.argv.slice(2));
console.log(args);
const portNumber = args["port"];
console.log(portNumber);

let registrationContent = "";
let projectContent = "";
let homeContent = "";

fs.readFile("./home.html", (err, home) => {
  if (err) throw err;
  homeContent = home;
});

fs.readFile("./registration.html", (err, registration) => {
  if (err) throw err;
  registrationContent = registration;
});

fs.readFile("./project.html", (err, project) => {
  if (err) throw err;
  projectContent = project;
});

http
  .createServer((request, response) => {
    const currurl = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });
    console.log(currurl);
    switch (currurl) {
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(portNumber);
