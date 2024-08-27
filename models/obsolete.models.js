const mongoose = require('mongoose');

const obsoleteEquipmentSchema = new mongoose.Schema({
    eqName: {
        type: String,
        required: [true, "Indique el nombre del equipo a ser dado de baja"]
    },
    eqCode: {
        type: String,
        minlength: [8],
        maxlength: [8],
        required: [true, "Indique el código del equipo a ser dado de baja"]
    },
    obDate: {
        type: Date,
        required: [true, "Indique la fecha en que ha sido dado de baja el equipo"]
    },
    obReason: {
        type: String,
        required: [true, "Indique cuál ha sido el motivo de dar de baja el equipo"]
    }, 
    depositPlace: {
        type: String,
        required: [true, "Indique el lugar donde se depositó el equipo"]
    },
    eqResponsible: {
        type: String,
        required: [true, "Indique la persona responsable de dar de baja el equipo"]
    },

}, {timestamps:true})

const obsoleteEquipment = mongoose.model("Obsolete", obsoleteEquipmentSchema)

module.exports = obsoleteEquipment;