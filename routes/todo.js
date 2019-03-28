var express = require("express");
var router = express.Router();

const mongo = require("../config/db");

/* GET todo items */
router.get("/", function(req, res, next) {
	mongo.client(db => {
		db.collection("todo_list")
			.find()
			.toArray((err, list) => {
				if (err) throw err;

				res.payload(list);
			});
	});
});

router.put("/", function(req, res) {
	mongo.client(db => {
		db.collection("todo_list").save(req.body, err => {
			if (err) throw err;

			res.payload(result);
		});
	});
});

module.exports = router;
