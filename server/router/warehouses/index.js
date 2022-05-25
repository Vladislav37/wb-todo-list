const express = require('express');
const {
  warehousesGetController,
  warehousesCreateController,
  warehousesUpdateController,
  warehousesDeleteController,
} = require('../../controllers/warehouses');

const warehousesRouter = express.Router();

warehousesRouter.get('/', warehousesGetController);
warehousesRouter.post('/', warehousesCreateController);
warehousesRouter.put('/', warehousesUpdateController);
warehousesRouter.delete('/', warehousesDeleteController);

module.exports.warehousesRouter = warehousesRouter;
