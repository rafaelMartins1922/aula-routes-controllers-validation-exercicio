require('../../config/dotenv')();
require('../../config/sequelize');

const seedUser = require('./UserSeeder');
const seedphone = require('./CellphoneSeeder');

(async () => {
  try {
    await seedUser();
    await seedphone();
  } catch(err) { console.log(err) }
})();
