const Obsolete = require('../models/obsolete.models');

module.exports = {
    getAllObsoleteReport: ((req, res) => {
        Obsolete.find().sort({obDate: 1}).collation({locale: "en", caseLevel:true})
            .then((allObsoleteReports) => {
                console.log(allObsoleteReports)
                res.json(allObsoleteReports)
            })
            .catch((err) => {
                console.log(err);
            })
    }),
    addObsoleteReport: ((req, res) => {
        Obsolete.create(req.body)
            .then((newObsoleteReport) => {
                console.log(newObsoleteReport);
                res.json(newObsoleteReport);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    })
}