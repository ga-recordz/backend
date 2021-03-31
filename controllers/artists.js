const Artist = require('../models/Artist');
const express = require('express');
const router = express.Router();

//----------------GET ALL ARTISTS----------------------------
router.get('/', (req, res, next) => {
	Artist.find({})
		.then((artists) => {
			res.json(artists);
		})
		.catch(next);
});


router.get("/:id", (req, res, next) => {
  Artist.findById({ _id: req.params.id })
    .then((artists) => {
      res.json(artists);
    })
    .catch(next);


});

router.post("/", (req, res, next) => {
  Artist.create(req.body).then(() => {
    Artist
      .find({})
      .then((artists) => {
        res.json(artists);
      })
      .catch(next);
  });
});

router.delete("/:id", (req, res, next) => {
  Artist.findByIdAndDelete({ _id: req.params.id }).then(() => {
    Artist.find({}).then((artists) => {
      res.json(artists);
    });
  });
});

router.put("/:id", (req, res, next) => {
  Artist
    .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(() => {
      Artist
        .find({})
        .then((artists) => {
          res.json(artists);
        })
        .catch(next);
    });
});

module.exports = router;
