const { response } = require("express");
const express = require("express");

const Item = require("../models/item");

const route = express.Router();

route.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

route.post("/", (req, res) => {
  const { name } = req.body;
  const newItem = new Item({ name });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  Item.findById({ _id: id })
    .then((item) => {
      item.remove().then(() => res.json({ success: true }));
    })
    .catch(() => res.json({ success: false }));
});

module.exports = route;
