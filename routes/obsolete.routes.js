const ObsoleteController = require('../controller/obsolete.controller');

module.exports = (app) => {
    app.get('/api/obsoletes', ObsoleteController.getAllObsoleteReport);
    app.post('/api/obsoletes', ObsoleteController.addObsoleteReport);
}
