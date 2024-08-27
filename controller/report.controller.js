const Report = require('../models/report.models');

module.exports = {
    getAllReports: ((req, res) => {
        Report.find().sort({mainDate: 1}).collation({locale: "en", caseLevel:true})
            .then((allReports) => {
                console.log(allReports)
                res.json(allReports)
            })
            .catch((err) => {
                console.log(err);
            })
    }),
    addReport: ((req, res) => {
        Report.create(req.body)
            .then((newReport) => {
                console.log(newReport);
                res.json(newReport);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    })

}