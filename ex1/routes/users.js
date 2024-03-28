var express = require('express');
var router = express.Router();
const userModel = require('../model/userModel');
const coronaVaccineModel = require('../model/coronaVaccineModel');


//Add user
router.post('/', function(req, res, next) {
    try {
        const id = req.body.id;
        if (id.length !== 9) {
            throw new Error('ID must have exactly 9 digits');
        }
        if (!/^\d+$/.test(id)) {
            throw new Error('ID must contain only numeric digits');
        }
        if (!/^\d+$/.test(req.body.phone)) {
            throw new Error('Phone must contain only numeric digits');
        }
        if (!/^\d+$/.test(req.body.mobilePhone)) {
            throw new Error('Mobile-phone must contain only numeric digits');
        }
        const data = new userModel({
        name:req.body.name,
        id:req.body.id,
        address:req.body.address,
        dateOfBirth:req.body.dateOfBirth,
        phone:req.body.phone,
        mobilePhone:req.body.mobilePhone,
        dateOfPositiveResult:req.body.dateOfPositiveResult,
        recoveryDate:req.body.recoveryDate,
    })
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }    // Do whatever you need to do with the user ID
});


module.exports = router;
//Get by ID Method
router.get('/:id', async (req, res) => {
    try{
        const data = await userModel.findOne({id:req.params.id});
        if (!data) {
            // If no document with the specified ID is found, send a 404 error response
            return res.status(404).json({ message: `User with ID ${req.params.id} doesn't exist` });
        }
        // Validate ID format (numeric digits only)
        if (!/^\d+$/.test(req.params.id)) {
            throw new Error('ID must contain only numeric digits');
        }
        res.json(data)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});


//Get all users
router.get('/', async (req, res) => {
    try{
        const data = await userModel.find();
        res.json(data)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});


//Update by ID Method
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await userModel.findOneAndUpdate({id:id}, updatedData, options)
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await userModel.findOneAndDelete({id:id})
        if (!data) {
            // If no document with the specified ID is found, send a 404 error response
            return res.status(404).json({ message: `User with ID ${req.params.id} doesn't exist` });
        }
        // Validate ID format (numeric digits only)
        if (!/^\d+$/.test(id)) {
            throw new Error('ID must contain only numeric digits');
        }
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;
