const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/matches', async (req, res, next) => {
  try {
    const {gender, genderPreference} = req.body
    const users = await User.findAll({
      where: {gender: genderPreference, genderPreference: gender},
      attributes: ['id', 'firstName', 'age', 'summary', 'photos', 'bwPhoto']
    })
    res.send(users)
  } catch (err) {
    next(err)
  }
})
