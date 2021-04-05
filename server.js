const express = require("express");
const app = express();

// app.get("/api/employees", (req, res) => res.send("GET method employess"));
// app.post("/api/employees", (req, res) => res.send("POST method employess"));
// app.patch("/api/employees", (req, res) => res.send("UPDATE method employess"));
// app.delete("/api/employees", (req, res) => res.send("DELETE method employess"));

// app.all("/api/employees", (req, res) =>
//   res.send(`${req.method} employees api`)
// );

app
  .route("/api/employees")
  .get((req, res) => res.send("GET method employess"))
  .post((req, res) => res.send("POST method employess"))
  .patch((req, res) => res.send("PATCH method employess"))
  .delete((req, res) => res.send("DELETE method employess"))
  .all((req, res) => res.send("Method not supported"));

app.listen(3000, () => console.log(`server is listening at PORT 3000`));
