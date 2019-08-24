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
    User.create({
      email: 'beyonce@email.com',
      password: '123',
      firstName: 'Beyonce',
      lastName: 'Knowles-Carter',
      age: 37,
      summary: 'Hi, my name is Beyonce. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [
        'https://www.wellandgood.com/wp-content/uploads/2018/09/Beyonce-Birthday-Collage-2.png',
        'https://www.billboard.com/files/styles/article_main_image/public/media/beyonce-live-smile-2018-otr-billboard-1548.jpg'
      ],
      bwPhoto: 'https://i.imgur.com/QW1vt3O.png',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    }),
    User.create({
      email: 'jennifer@email.com',
      password: '123',
      firstName: 'Jennifer',
      lastName: 'Howley',
      age: 28,
      summary: 'Hi, my name is Jennifer. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [
        'https://www.wonderslist.com/wp-content/uploads/2015/11/Cara-Delevingne-Highest-Paid-Models-Of-2015.jpg',
        'http://www.runwaylive.com/wp-content/uploads/2016/06/6983226-beauty-barbara-palvin-hungarian-fashion-model.jpg'
      ],
      bwPhoto: 'https://i.imgur.com/svaXhHv.jpg',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    }),
    User.create({
      email: 'ashley@email.com',
      password: '123',
      firstName: 'Ashley',
      lastName: 'Brown',
      age: 26,
      summary: 'Hi, my name is Ashley. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [
        'https://img.freepik.com/free-photo/one-adult-spring-background-outdoors_1139-823.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg?size=626&ext=jpg'
      ],
      bwPhoto: 'https://i.imgur.com/svaXhHv.jpg',
      createdFace: 'https://i.imgur.com/ycVVg0B.jpg'
    }),
    User.create({
      email: 'rachel@email.com',
      password: '123',
      firstName: 'Rachel',
      lastName: 'Holmes',
      age: 24,
      summary: 'Hi, my name is Rachel. I am looking for Jay Z.',
      gender: 'female',
      genderPreference: 'male',
      photos: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkq0VimKIP0QafXa4fEh8mgwQRs7LklVn1V8_0uIWzZTordmD',
        'http://sf.co.ua/13/01/wallpaper-2572392.jpg',
        'http://sf.co.ua/13/05/wallpaper-2819229.jpg'
      ],
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
