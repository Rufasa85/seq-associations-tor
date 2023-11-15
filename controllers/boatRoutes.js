const express = require("express");
const router = express.Router();
const {Boat,User} = require("../models/");

//find all
router.get("/", (req, res) => {
  Boat.findAll()
    .then((dbBoats) => {
      res.json(dbBoats);
    })
    .catch((err) => {
      res.status(500).json({
        msg: "oh no an error!",
        err,
      });
    });
});
//find one
router.get("/:id", (req, res) => {
  Boat.findByPk(req.params.id,{
    include:[User]
  })
    .then((dbBoat) => {
      if (dbBoat) {
        res.json(dbBoat);
      } else {
        res.status(404).json({ msg: "no such Boat" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        msg: "oh no an error!",
        err,
      });
    });
});
//create
router.post("/", (req, res) => {
  Boat.create({
    name: req.body.name,
    type: req.body.type,
    length: req.body.length,
    crewSize: req.body.crewSize,
    UserId:req.body.UserId
  })
    .then((newBoat) => {
      res.json(newBoat);
    })
    .catch((err) => {
      res.status(500).json({
        msg: "oh no an error!",
        err,
      });
    });
});
router.put("/:id", (req, res) => {
  Boat.update(
    {
      name: req.body.name,
      type: req.body.type,
      length: req.body.length,
      crewSize: req.body.crewSize,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedBoat) => {
      console.log("updatedBoat: ", updatedBoat);
      if (updatedBoat[0]) {
        res.json(updatedBoat);
      } else {
        res.status(404).json({ msg: "no such user to update" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        msg: "oh no an error!",
        err,
      });
    });
});
//delete
router.delete("/:id", (req, res) => {
  Boat.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delBoat) => {
      console.log("delBoat: ", delBoat);
      if (delBoat) {
        res.json(delBoat);
      } else {
        res.status(404).json({ msg: "no such Boat to delete" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        msg: "oh no an error!",
        err,
      });
    });
});

module.exports = router;
