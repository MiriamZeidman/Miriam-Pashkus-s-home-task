var express = require('express');
var router = express.Router();
router.post('/:id', function(req, res, next) {
    var userId = req.body.id; // Get the user ID from the request parameters
    // Do whatever you need to do with the user ID
    res.send(`The user ${userId} added to the list`);
});
/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  var userId = req.params.userId; // Get the user ID from the request parameters
  var userDetails=
    {
      "name": "Miriam Pashkus",
      "user id":"userId",
      "adress": "Kipodan 5, Jerusalem",
      "date of birth": "17/02/2002",
      "phone": "02-5800871",
      "mobile phone": "053-4678502"
    }
  res.send(userDetails);
});

router.delete('/:userId', function(req, res, next) {
  var userId = req.params.userId; // Get the user ID from the request parameters
  // Do whatever you need to do with the user ID
  res.send(`The user ${userId} deleted from the list`);
});
module.exports = router;
