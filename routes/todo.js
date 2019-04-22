var express = require("express");
var router = express.Router();
const validator = require("../models/validator");

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

router.put("/", function(req, res, next) {
	console.log(req.body);
	validator
		.check(req.body, "item")
		.then(item => {
			mongo.client(db => {
				db.collection("todo_list").insertOne(item, err => {
					if (err) throw err;

					res.payload(item);
				})
			})
		})
		.catch(err => next(err));
});

module.exports = router;