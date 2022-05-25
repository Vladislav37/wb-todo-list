/* eslint-disable no-console */
let { warehouses } = require('./data');

module.exports.warehousesGetController = (req, res) => {
  console.info('warehousesGetController get request');

  res.status(200).json({
    data: {
      contactInfo: {
        fullname: 'tesTestovich',
        phone: '89055936999',
        email: 'test23@test.ru',
        position: 'test',
      },
      warehouses: [
        {
          id: '1',
          phone: '+79208525242',
          address: {
            city: 'Москва',
            street: 'Первомайская',
            building: '1',
            corp: '2',
            section: '3',
            index: '1234',
          },
          workingHours: '9:00-18:00',
          fullname: 'Тестов Тест Тестович',
          comment: 'главный склад',
          main: true,
        },
      ],
      supplierName: '',
    },
    error: false,
    errorText: '',
    additionalErrors: {},
  });
};

module.exports.warehousesCreateController = (req, res) => {
  console.info('warehousesCreateController get request', req.body);
  const newWarehouse = req.body.warehouses;

  warehouses.push({ ...newWarehouse, id: `${new Date()}` });

  res.status(200).json({
    error: null,
    errorText: '',
    data: warehouses,
    additionalErrors: null,
  });
};

module.exports.warehousesUpdateController = (req, res) => {
  console.info('warehousesUpdateController get request', req.body);
  const updatedWarehouse = req.body.warehouses;

  warehouses = warehouses.map((warehouse) =>
    warehouse.id === updatedWarehouse.id ? updatedWarehouse : warehouse,
  );

  res.status(200).json({
    error: null,
    errorText: '',
    data: warehouses,
    additionalErrors: null,
  });
};

module.exports.warehousesDeleteController = (req, res) => {
  console.info('warehousesDeleteController get request');
  const { id: deleteWarehouseId } = req.body;

  warehouses = warehouses.filter(
    (warehouse) => warehouse.id !== deleteWarehouseId,
  );

  res
    .status(200)
    .json({ error: null, errorText: '', data: [], additionalErrors: null });
};
