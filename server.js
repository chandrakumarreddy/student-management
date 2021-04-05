const path = require("path");
const express = require("express");
const app = express();
const router = express.Router();
const router1 = express.Router();

const data = [{ id: 1, name: "test1" }];

app.use("/static", express.static(path.join(__dirname, "public")));

router.get("/employees", (req, res) => res.send("Hello world"));
router1.get("/employees", (req, res) => {
  const query = req.query;
  console.log(query);
  return res.send(data);
});

app.use("/api", router);
app.use("/api/v2", router1);

app.listen(3000, () => console.log(`server is listening at PORT 3000`));
