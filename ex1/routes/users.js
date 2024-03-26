var express = require('express');
var router = express.Router();
const Model = require('../model/model');
router.post('/:id', function(req, res, next) {
    const data = new Model({
        name:req.body.name,
        id:req.body.id,
        address:req.body.address,
        dateOfBirth:req.body.dateOfBirth,
        phone:req.body.phone,
        mobilePhone:req.body.mobilePhone,
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }    // Do whatever you need to do with the user ID
});
/* GET users listing. */



module.exports = router;
