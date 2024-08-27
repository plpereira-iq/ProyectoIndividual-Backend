const EquipmentController = require('../controller/equipment.controller');

module.exports = (app) => {
    app.get('/api/equipments', EquipmentController.getAllEquipments);
    app.post('/api/equipments', EquipmentController.addEquipment);
    app.delete('/api/equipments/:id', EquipmentController.deletedEquipment);
    app.get('/api/equipments/:id', EquipmentController.getOneEquipment);
    app.put('/api/equipments/:id', EquipmentController.updateOneEquipment);
    
}
