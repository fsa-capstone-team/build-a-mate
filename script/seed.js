'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'jayz@email.com',
      password: '123',
      firstName: 'Shawn',
      lastName: 'Carter',
      age: 49,
      summary:
        'Hi, my name is Shawn, but I go by Jay-Z. I am looking for Beyonce.',
      gender: 'male',
      genderPreference: 'female',
      photos: [],
      bwPhoto: 'https://i.imgur.com/ycVVg0B.jpg',
      createdFace: 'https://i.imgur.com/QW1vt3O.png'
    }),
    // User.create({
    //   email: 'beyonce@email.com',
    //   password: '123',
    //   firstName: 'Beyonce',
    //   lastName: 'Knowles-Carter',
    //   age: 37,
    //   summary: 'Hi, my name is Beyonce. I am looking for Jay Z.',
    //   gender: 'female',
    //   genderPreference: 'male',
    //   photos: [],
    //   bwPhoto: 'https://i.imgur.com/QW1vt3O.png',
    //   createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    // }),
    User.create({
      email: 'jennifer1@email.com',
      password: '123',
      firstName: 'Jennifer',
      lastName: 'Howley',
      age: 28,
      summary: 'Hi, my name is Jennifer. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [],
      bwPhoto: 'https://i.imgur.com/svaXhHv.jpg',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    }),
    User.create({
      email: 'beyonce@email.com',
      password: '123',
      firstName: 'Beyonce',
      lastName: 'Knowles-Carter',
      age: 37,
      summary: 'Hi, my name is Beyonce. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [],
      bwPhoto: 'https://i.imgur.com/QW1vt3O.png',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    }),
    User.create({
      email: 'jennifer2@email.com',
      password: '123',
      firstName: 'Jennifer',
      lastName: 'Howley',
      age: 28,
      summary: 'Hi, my name is Jennifer. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [],
      bwPhoto: 'https://i.imgur.com/svaXhHv.jpg',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    }),
    User.create({
      email: 'jennifer3@email.com',
      password: '123',
      firstName: 'Jennifer',
      lastName: 'Howley',
      age: 28,
      summary: 'Hi, my name is Jennifer. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [],
      bwPhoto: 'https://i.imgur.com/svaXhHv.jpg',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    }),
    User.create({
      email: 'jennifer4@email.com',
      password: '123',
      firstName: 'Jennifer',
      lastName: 'Howley',
      age: 28,
      summary: 'Hi, my name is Jennifer. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [],
      bwPhoto: 'https://i.imgur.com/svaXhHv.jpg',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    }),
    User.create({
      email: 'jennifer5@email.com',
      password: '123',
      firstName: 'Jennifer',
      lastName: 'Howley',
      age: 28,
      summary: 'Hi, my name is Jennifer. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [],
      bwPhoto: 'https://i.imgur.com/svaXhHv.jpg',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
