const express = require('express')
const router = express.Router()
//importing people model
const Peoples = require('../models/peopleModel')

//GET PEOPLE ALL
router.get('/', async (req, res) => {
    try {
        const People = await Peoples.find()
        res.json(People)
    } catch (err) {
        res.status(500).json({ message: err.message})
  }
})
//GET ONE PEOPLE BY ID
router.get('/:id', getPeople, (req, res) => {
    res.send(res.peoples.name)
})
//CREATING PEOPLE
router.post('/', async (req, res) => {
    const Peoples = new People({
        name: req.body.name,
        membershipDate: req.body.membershipDate
    })
    try {

        const newPeople = await Peoples.save()
        res.status(201).json(newPeople)

    } catch (err) {
        res.status(400).json({ message: err.message})
    }
    
})
//UPDATING PEOPLE 
router.patch('/:id', (req, res) => {
    
})
//DELETING PEOPLE 
router.delete('/:id', (req, res) => {
    res.peoples
    
})

//Get prople function
async function getPeople(req, res, next) {
    let peoples
    try {
        peoples = await peoples.findById(req.params.id)
        if (peoples === null)
            return res.status(404).json({MESSAGE: ' CANNOT FIND PEOPLE'})
        
    } catch (err) {
        return res.status(500).json({MESSAGE: err.message})
        
    }
    res.peoples = peoples
    next()
    
}

module.exports = router