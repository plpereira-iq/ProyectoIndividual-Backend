const MaintenanceController = require('../controller/maintenance.controller');

module.exports = (app) => {
    app.get('/api/maintenances', MaintenanceController.getAllMaintenances);
    app.post('/api/maintenances', MaintenanceController.addMaintenance);
    app.delete('/api/maintenances/:id', MaintenanceController.deletedMaintenance);
}
