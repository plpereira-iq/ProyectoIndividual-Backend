const ReportController = require('../controller/report.controller');

module.exports = (app) => {
    app.get('/api/reports', ReportController.getAllReports);
    app.post('/api/reports', ReportController.addReport);
}
