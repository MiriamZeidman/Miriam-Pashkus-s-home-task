var express = require('express');
var router = express.Router();
const Model = require('../model/model');

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
//Get by ID Method
router.get('/getUserById/:id', async (req, res) => {
  try{
    const data = await Model.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
});

//Update by ID Method
router.patch('/updateUser/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(
        id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Delete by ID Method
router.delete('/deleteUser/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})