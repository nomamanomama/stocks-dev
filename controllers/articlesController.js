const db = require("../models");
const axios = require("axios");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    console.log("searching db for all saved articles");
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    console.log("searching for nytimes articles");
    const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=";
    const APIKEY = "&api-key=005ffad83ef24e5aa4a4232b7c24957b";
    const query = BASEURL + req.params.query + APIKEY;
    console.log(query);

    axios
      .get(query)
      .then(response => {
        console.log(response)
        res.json(response) // <= send data to the client
      })
      .catch(err => {
        console.log(err)
        res.send({ err }) // <= send error
      });
  }

};
