var express = require('express');
var app = express();
var router = express.Router();

//Schema
var TodoList = require('../models/TodoList');

// Get Specific
router.route('/:id').get(async function (req, res) {
  try {
    var item = await TodoList.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get All Items
router.route('/').get(async function (req, res) {
  try {
    var items = await TodoList.find();
    res.json(items);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Add item
router.route('/add').post(function (req, res) {
  var item = new TodoList(req.body);
      item.save()
    .then(item => {
    res.json('Added');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//  Update Specific
router.route('/update/:id').post(async function (req, res) {
  try {
    var item = await TodoList.findById(req.params.id);
    if (!item)
      return res.status(404).send('Could not load Document');

    item.desc = req.body.desc;
    await item.save();
    res.json('Updated');
  } catch (err) {
    res.status(400).send("unable to update the database");
  }
});

// Delete Specific
router.route('/delete/:id').get(async function (req, res) {
  try {
    await TodoList.findByIdAndDelete(req.params.id);
    res.json('Deleted');
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
