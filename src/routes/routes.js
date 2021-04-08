
const router = require('express').Router();
const CellphoneController = require('../controllers/CellphoneController');
const validators = require('../config/validators');

router.post('/cellphones',validators.validateCellphone('create'),CellphoneController.create);
router.get('/cellphones',CellphoneController.index);
router.get('/cellphones/:id',CellphoneController.show);
router.put('/cellphones/:id', validators.validateCellphone('update'),CellphoneController.update);
router.delete('/cellphones/:id', CellphoneController.delete);

router.put('/acquireCellPhone/:userId/:cellphoneId', CellphoneController.acquireCellPhone);
router.put('/throwAwayCellPhone/:userId/:cellphoneId', CellphoneController.throwAwayCellPhone);
module.exports = router;