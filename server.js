const http = require("http");
const url = require("url");

const employeesData = [{ id: 1, name: "test1" }];

function employeeList(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(employeesData));
  return;
}
function addToEmployeeList(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    employeesData.push(JSON.parse(body));
    res.end(`${JSON.parse(body).name} added to employee list`);
  });
  req.on("error", (error) => {
    res.statusCode = 400;
    res.end(error);
  });
}

function defaultMessage(req, res) {
  res.end("not found");
  return;
}

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/api/employees") {
    switch (req.method) {
      case "GET":
        employeeList(req, res);
        break;
      case "POST":
        addToEmployeeList(req, res);
        break;
      default:
        defaultMessage(req, res);
        break;
    }
  } else {
    defaultMessage(req, res);
  }
});

server.listen(3000, () => console.info(`server is listening at PORT 3000`));
