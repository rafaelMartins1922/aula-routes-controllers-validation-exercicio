const Cellphone = require('../../models/Cellphone');
const faker = require('faker-br');

const seedCellphone = async () => {
    const cellphones = [];

    for(let i = 0; i<=9;i++){
        cellphones.push({
            purchase_date:faker.date.future(),
            model_name:faker.lorem.word(),
            chip_amount:faker.random.number(),
            manufacturer:faker.lorem.word(),
            hasMic:faker.random.number()%2,
            UserId:8
        });
    }

    try{
        await Cellphone.sync({force:true});
        await Cellphone.bulkCreate(cellphones);
    }catch(err){
        console.log(err);
    }

}

module.exports = seedCellphone;