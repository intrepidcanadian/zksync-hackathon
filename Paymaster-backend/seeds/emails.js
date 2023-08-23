const { faker } = require('@faker-js/faker');

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('emails').del(); 

    const emailList = [];

    for (let i = 0; i < 20; i++) {
        const email = faker.internet.email();
        emailList.push({
            email: email,
        });
    }

    await knex('emails').insert(emailList);
};