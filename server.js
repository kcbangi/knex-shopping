"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

const users = require(`./routes/users`);
const products = require(`./routes/products.js`);
const carts = require(`./routes/carts.js`);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.send("KNEX SHOPPING");
});

app.use("/users", users);

app.use("/products", products);

app.use("/carts", carts);

app.listen(PORT, () => {
  console.log(`Server PORT ${PORT}`);
});
