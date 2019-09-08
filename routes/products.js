const express = require("express");
const router = express.Router();
const db = require("../database");

router.route("/").get((req, res) => {
  db.raw("select * from products")
    .then(productObject => {
      return res.status(200).send(productObject.rows);
    })
    .catch(err => {
      return res.status(500).send("{ 'message' : 'Database error' }");
    });
});

router.route("/:product_id").get((req, res) => {
  db.raw("select * from products where id = ?", [req.params.product_id])
    .then(productObject => {
      if (productObject.rows.length === 0) {
        return res.status(404).send('{ "message": "Product not found" }');
      }

      return res.status(200).send(productObject.rows[0]);
    })
    .catch(err => {
      return res.status(500).send('{ "message": "Database error" }');
    });
});

module.exports = router;
