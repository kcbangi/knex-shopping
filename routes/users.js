const express = require("express");
const router = express.Router();
const db = require("../database");

router.route("/:user_id").get((req, res) => {
  console.log(req.params.user_id);
  db.raw("SELECT * FROM users where id = ?", [req.params.user_id])
    .then(function(userObject) {
      if (userObject.rows.length === 0) {
        return res.status(404).send(`User not found`);
      }

      let userDetail = userObject.rows[0];
      return res.status(200).send(userDetail);
    })
    .catch(err => {
      return res.status(500).send(`Error on Database`);
    });
});

module.exports = router;
