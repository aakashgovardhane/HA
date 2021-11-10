const appliances = require('../models/appliances');

exports.getStates = (req,res) => {
    appliances.findOne({},{_id:0}).then(
        response => res.status(200).json(response)
    )
    .catch(err => console.log(err))
}

exports.setState = (req, res) => {
    const states = req.query
    console.log(states)
    if([states[Object.keys(states)[0]]]==1){
        appliances.updateOne({ [Object.keys(states)[0]]: 0 }, { [Object.keys(states)[0]]: 1 })
        .then(response => {
            res.status(200).json({ "messege": "Updated Successfully", "updated": true })
        })
        .catch(err => res.status(500).send(err))
    }else if([states[Object.keys(states)[0]]]==0){
        appliances.updateOne({ [Object.keys(states)[0]]: 1 }, { [Object.keys(states)[0]]: 0 })
        .then(response => {
            res.status(200).json({ "messege": "Updated Successfully", "updated": true })
        })
        .catch(err => res.status(500).send(err))
    }
}