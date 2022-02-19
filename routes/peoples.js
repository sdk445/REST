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
router.get('/:id', GETPeople, (req, res) => {
       
    res.json(res.GETPeople)
    
    
})



//CREATING PEOPLE
router.post('/', async (req, res) => {
    const People = new Peoples({
        name: req.body.name,
        membershipDate: req.body.membershipDate
    })
    try {

        const newPeople = await People.save()
        res.status(201).json(newPeople)

    } catch (err) {
        res.status(400).json({ message: err.message})
    }
    
})
//UPDATING PEOPLE 
router.patch('/:id', GETPeople, async(req, res) => {
    
    if (req.body.name != null) {
        res.GETPeople.name = req.body.name
    }


    if (req.body.membershipDate != null) {
        res.GETPeople.membershipDate = req.body.membershipDate


    } 

    try {

        const updatePeople = await res.GETPeople.save()
        res.json(updatePeople)

    } catch (err) {
        
        res.status(400).json({ message: err.message})
        
    }
    
})


//DELETING PEOPLE 
router.delete('/:id', GETPeople, async (req, res) => {
    try {
        await res.GETPeople.remove()
        res.json({message: 'people deleted'})
    } catch (err) {
        // if something went wrong on our side ***other than value mismatch***
        res.status(500).json({ message: err.message})
    }
    
    
    
})

//Get prople function
async function GETPeople(req, res, next) {
    let FindPeople
    try {
        FindPeople = await Peoples.findById(req.params.id)
        if (FindPeople === null) {
            res.send(404)
        }
         } catch (err) {
        return res.status(404).json({MESSAGE: err.message})
        
    }
    res.GETPeople = FindPeople
    next()
    
}

module.exports = router