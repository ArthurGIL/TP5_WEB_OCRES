// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

/*-----------------------------------------------------------------------------------*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing. */
/*
router.post('/:id', (req, res) => {
  const {id} = req.params;
  const {user} = req.body;
  const userToUpdate = _.find(users, ["id", id]);

  userToUpdate.user = user;

  res.json({
    message: 'Just updated ${id} with ${user}'
  });
});
*/

module.exports = router;
