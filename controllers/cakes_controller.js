var express = require("express");
var router = express.Router();

var cake = require("../models/cake.js");

router.get("/", (req, res) => {
    cake.selectAll( data => {
        var cakeObj = { cakes: data };

        res.render("index", cakeObj);
    })
});

router.post("/api/cakes", (req, res) => {
    cake.insertOne(["cake_name", "eaten"], [req.body.cake_name, req.body.eaten], result => {
        console.log(result);
        res.json(result);
    });
});

router.put("/api/cakes/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    cake.updateOne({
        eaten: req.body.eaten
    }, condition, result => {
        if (result.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

router.delete("/api/cakes/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    cake.deleteOne(condition, result => {
        if (result.affectedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;