const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
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
        required: [true, "Indique la fecha en que se llevó a cabo mantenimiento"]
    },
    mainTime: {
        type: String,
        required: [true, "Indique la hora en que se llevó a cabo el mantenimiento"]
    },
    mainDuration: {
        type: String,
        required: [true, "Indique la duración del mantenimiento"]
    },
    mainDescription: {
        type: String,
        required: [true, "Describa el mantenimiento realizado"]
    }, 
    mainResponsible: {
        type: String,
        required: [true, "Indique la persona responsable del mantenimiento"]
    },

}, {timestamps:true})

const Report = mongoose.model("Report", ReportSchema)

module.exports = Report;