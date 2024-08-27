const mongoose = require('mongoose');

const MaintenanceSchema = new mongoose.Schema({
    eqName: {
        type: String,
        required: [true, "Proporcione el nombre del equipo"]
    },
    eqCode: {
        type: String,
        minlength: [8],
        maxlength: [8],
        required: [true, "Proporcione el código del equipo"]
    },
    mainDate: {
        type: Date,
        required: [true, "Indique la fecha prevista para el mantenimiento"]
    },
    mainTime: {
        type: String,
        required: [true, "Indique la hora prevista para el mantenimiento"]
    },
    mainDuration: {
        type: String,
        required: [true, "Indique la duración del mantenimiento"]
    },
    mainDescription: {
        type: String,
        required: [true, "Indique cuál será el mantenimiento a ser realizado"]
    }, 
    mainResponsible: {
        type: String,
        required: [true, "Indique quién será la persona encargada de llevar a cabo el mantenimiento"]
    },

}, {timestamps:true})

const Maintenance = mongoose.model("Maintenance", MaintenanceSchema)

module.exports = Maintenance;