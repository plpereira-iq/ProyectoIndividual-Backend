const Equipment = require('../models/equipment.models');

module.exports = {
    getAllEquipments: ((req, res) => {
        Equipment.find().sort({eqName: 1}).collation({locale: "en", caseLevel:true})
            .then((allEquipments) => {
                console.log(allEquipments)
                res.json(allEquipments)
            })
            .catch((err) => {
                console.log(err);
            })
    }),
    addEquipment: ((req, res) => {
        Equipment.create(req.body)
            .then((newEquipment) => {
                console.log(newEquipment);
                res.json(newEquipment);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    }),

    deletedEquipment: ((req, res) => {
        Equipment.deleteOne({_id: req.params.id})
            .then((deletedEquipment) => {
                res.json(deletedEquipment)
            })
            .catch((err) => {
                response.status(400).json(err);
            })
    }),

    getOneEquipment: ((req, res) => {
        Equipment.findOne({_id: req.params.id})
            .then((oneEquipment) => {
                res.json(oneEquipment)
            })
            .catch((err) => {
                console.log(err)
            })
    }),

    updateOneEquipment: ((request, response) => {
        Equipment.findOneAndUpdate({_id: request.params.id},
            request.body,{new: true, runValidators: true}).then((updatedEquipment) => {
                console.log(updatedEquipment);
                response.json(updatedEquipment)
            })
            .catch((err) => {
                response.status(400).json(err);
            })
    })
}