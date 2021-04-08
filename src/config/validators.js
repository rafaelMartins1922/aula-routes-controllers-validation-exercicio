const {body,param} = require("express-validator");

const validateCellphone = (method) => {
    switch(method){
        case 'create':
            return [
                body('manufacturer').exists().withMessage('Manufacturer must not be empty'),
                body('chip_amount').exists().isNumeric().withMessage('Chip_amoun must not be empty and must be numeric')
            ];
        case 'update':
            return [
               
            ];
    }
};

module.exports = {
    validateCellphone
}