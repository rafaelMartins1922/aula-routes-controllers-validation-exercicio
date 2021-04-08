const User = require("../../models/User");
const faker = require('faker-br');

 const seedUser = async function () {

  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      email: faker.internet.email(),
      name: faker.name.firstName(),
      date_of_birth: faker.date.past(),
      phone_number: faker.phone.phoneNumber(),
      gender: faker.lorem.word(),
      RoleId: faker.random.number() % 3 + 1
    });
  }

  try {
    await User.sync({ force: true });
    await User.bulkCreate(users);

  } catch (err) { console.log(err); }
}

module.exports = seedUser;