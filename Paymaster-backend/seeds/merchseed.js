const { faker } = require('@faker-js/faker');
const imagePaths = require('../import1.js')

// import { faker } from '@faker-js/faker';

// const randomProduct = faker.commerce.product()
// const randomproductDescription = faker.commerce.productDescription()
// const randomproductMaterial = faker.commerce.productMaterial()
// const randomproductName = faker.commerce.productName()
// const randomprice = faker.commerce.price({ min: 100, max: 200 })

exports.seed = async function (knex) {
    
  // Deletes ALL existing entries
  await knex('merchTables').del()
  
  const merchdata = [
    {
      id: 1,
      product: `Summer Vibes`,
      productDescription: `Be a star. Ask questions. Challenge your Mind`,
    },
    {
      id: 2,
      product: `You don't know me`,
      productDescription: `There is no multiverse where you know who I am. I am the one who knocks`,
    },
    {
      id: 3,
      product: `Into the Teeth of Ice`,
      productDescription: `Famous quote from Sir Ernest Shackleton. This depicts the fight of the human spirit.`,
    },
    {
      id: 4,
      product: `No Courage Without Fear`,
      productDescription: `Every inch matters in this game. Football is a game of inches`,
    },
    {
      id: 5,
      product: `Go Where The Puck Is Going to Be and Not Where It Has Been`,
      productDescription: `Sliding into greatness with this outfit. Wayne Gretzky's famous outfit before the 1988 Stanley Cup Finals`,
    },
    {
      id: 6,
      product: `Dream on the pitch`,
      productDescription: `Baseball accessories for the dreamers that chase their dreams on the pitch of glory`,
    },
    {
      id: 7,
      product: `Born Ready`,
      productDescription: `Outfitted to the sport you love. Loving the moment, the fight, and the journey. This is the dream`,
    },
    {
      id: 8,
      product: `Fight`,
      productDescription: `There are more stars in the universe than sand on earth. Chase the boundaries`,
    },
    {
      id: 9,
      product: `Creative Skater Boy`,
      productDescription: `Skateboarding is a sport of creativity. Express yourself with this outfit`,
    },
    {
      id: 10,
      product: `1% Better Every Day`,
      productDescription: `The journey of a thousand miles begins with a single step. This is the first step`,
    },
    {
      id: 11,
      product: `Smash all records`,
      productDescription: `The only way to be the best is to beat the best. Smash all records`,
    },
    {
      id: 12,
      product: `Pray for the bear`,
      productDescription: `The bear is a symbol of strength and power. Pray for the bear`,
    },
    {
      id: 13,
      product: `Ankle Breaker`,
      productDescription: `When you break ankles, you break hearts.`,
    },
    {
      id: 14,
      product: `Shaq Attack`,
      productDescription: `Shaq Attack. The most dominant player in the history of the NBA.`,
    },
    {
      id: 15,
      product: `Be Legendary`,
      productDescription: `I knew a man once that tried and failed. And he told me that is better than never tried at all`,
    },
    {
      id: 16,
      product: `Try. There is no try`,
      productDescription: `Michael Jordan was an elite basketball player that won 6 rings. This basketball was his final shot in Utah`,
    },
    {
      id: 17,
      product: `Just Keep Swimming`,
      productDescription: `I wish you were here. The world is a better place with you in it. Just keep swimming`,

    },
    {
      id: 18,
      product: `Pushing the Limits`,
      productDescription: `True strength is being able to ask for help and having the courage to do so`,
    },
    {
      id: 19,
      product: `Jock's Life By FansSol`,
      productDescription: `Illustration by the famous FansSol who also drew the Fan Overture`,
    },
    {
      id: 20,
      product: `Stay Hard Running Set`,
      productDescription: `Inspired by David Goggins. Never give up. Stay Hard. See what you're made of.`,
    },
   
];

    for (const merch of merchdata) {

      // const randomProduct = faker.commerce.product();
      // const randomproductDescription = faker.commerce.productDescription();
      const randomproductMaterial = faker.commerce.productMaterial();
      const randomproductName = faker.commerce.productName();
      const randomprice = faker.commerce.price({ min: 50, max: 200 });
      const imagePath = imagePaths[merch.id];

      await knex('merchTables').insert({
        ...merch,
        productMaterial: randomproductMaterial,
        productName: randomproductName,
        price: randomprice,
        image: imagePath
      });
    }
};

