var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", (req, res) => {
    db.Cake.findAll().then( dbCake => {
        res.render("index", dbCake);
    })
});

router.post("/api/cakes", (req, res) => {
    db.Cake.create({
        cake_name: req.body.cake_name,
        eaten: req.body.eaten
    }).then( dbCake => {
        res.json(dbCake);
    })

});

router.put("/api/cakes/:id", (req, res) => {
    var newCake = {
        cake_name: req.body.cake_name,
        eaten: req.body.eaten
    };

    db.Cake.update(newCake, {
        where: {
            id: req.params.id
        }
    }).then( dbCake => {
        if (result.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/cakes/:id", (req, res) => {
    db.Cake.destroy({
        where: {
            id: req.body.id
        }
    }).then( dbCake => {
        if (result.affectedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    }); 
    
});

module.exports = router;