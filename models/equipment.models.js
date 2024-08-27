const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
    eqName: {
        type: String,
        required: [true, "Indique el nombre del equipo"]
    },
    eqCode: {
        type: String,
        minlength: [8],
        maxlength: [8],
        required: [true, "El código debe iniciar con las tres primeras letras del equipo, seguido de un guión y tres números"]
    },
    inDate: {
        type: Date,
        required: [true, "Indique la fecha de instalación del equipo"]
    },
    inPoint: {
    type: String,
    minlength: [10],
    required: [true, "Indique el punto de instalación del equipo"]
    },
    eqDescription: {
        type: String,
        required: [true, "Proporcione una descripción del equipo"]
    }, 
    eqOrigen: {
        type: String,
        required: [true, "Indique el origen del equipo"]
    },
    inResponsible: {
        type: String,
        required: [true, "Indiquee al ente responsable de la instalación del equipo"]
    },

}, {timestamps:true})

const Equipment = mongoose.model("Equipment", EquipmentSchema)

module.exports = Equipment;